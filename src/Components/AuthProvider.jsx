import { useContext, createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"

const AuthContext = createContext()


export const AuthProvider = ({children}) => {

   const [user, setUser] = useState({}) 

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser);
    })

    return () => unsubscribe()
   }, []) 

  return <AuthContext.Provider value = {user}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined) throw new Error('useAuth must be used inside AuthProvider')

    return context;
}