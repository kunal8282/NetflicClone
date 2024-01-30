import { useContext, createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import Loader from "./Loader"

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

  if(!isLoad) return <Loader /> 

  return <AuthContext.Provider value = {user}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined) throw new Error('useAuth must be used inside AuthProvider')

    return context;
}