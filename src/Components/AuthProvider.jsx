import { useContext, createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import Loader from "./Loader"
import PropTypes from 'prop-types'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {

   const [user, setUser] = useState({}) 
   const [isLoad, setisLoad] = useState(false)

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setisLoad(true)
    })

    return () => unsubscribe()
   }, []) 

  if(!isLoad) return <div className="flex justify-center items-center bg-black h-screen"> <Loader /> </div> 

  return <AuthContext.Provider value = {user}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined) throw new Error('useAuth must be used inside AuthProvider')

    return context;
}