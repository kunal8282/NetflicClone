import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom'
import {useAuth} from './AuthProvider'

const DropDownBox = () => {
   
  const navigate = useNavigate()  
  const user = useAuth()

    
  const handleSignOutClick = () => {
    signOut(auth).then(() => navigate('/login', {replace : true}))
  }  

  return (
    <div className='shadow-lg w-full py-2 transition-opacity'>
        <ul className='flex justify-center flex-col items-center'>

            <li className="w-full border-b text-center py-1 font-semibold">
              {user.displayName}
            </li>

            <li className='text-center py-1'>
                <button onClick={handleSignOutClick}>Sign Out</button>
            </li>
        </ul>
    </div>
  )
}

export default DropDownBox