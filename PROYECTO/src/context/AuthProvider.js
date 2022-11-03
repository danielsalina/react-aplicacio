import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}) {

    const [userLogin, setUserLogin] = useState( localStorage.getItem("login") || false)
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || {})

    const loginUser = (userInfo)=>{
        setUserLogin(true)
        localStorage.setItem("login", true)
        setUserInfo(userInfo)
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        console.log("Login User")
    }

    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login", false)
        localStorage.removeItem("userInfo", false)
        console.log("Logout User")
    }

    return ( 
        <AuthContext.Provider value={{userLogin, loginUser, logoutUser, userInfo}}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthProvider;