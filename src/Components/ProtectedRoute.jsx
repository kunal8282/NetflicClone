import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { auth } from '../utils/firebase';
import { addUser } from '../utils/redux-slice/userSlice';

const ProtectedRoute = ({children}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()  

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({
                    displayName : user.displayName,
                    email : user.email,
                    uid : user.uid,
                    emailVerified : user.emailVerified
                }))
            } else {
                navigate('/login', {replace : true})
            }
          });

    return () => {
        unsubscribe();
    }      

    }, [navigate])

    return children
}

export default ProtectedRoute