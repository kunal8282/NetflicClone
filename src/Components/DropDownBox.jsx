import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from 'react-router-dom'

const DropDownBox = () => {
   
  const navigate = useNavigate()  
    
  const handleSignOutClick = () => {
    signOut(auth).then(() => navigate('/login', {replace : true}))
  }  

  return (
    <div className='shadow-lg w-[130%] py-2 transition-opacity'>
        <ul className='flex justify-center'>
            <li className='cursor-pointer'>
                <button onClick={handleSignOutClick}>Sign Out</button>
            </li>
        </ul>
    </div>
  )
}

export default DropDownBox