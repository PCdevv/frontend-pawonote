import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export  const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ))

    const login = async(input) => {
        const res = await axios.post("http://127.0.0.1:5000/api/auth/login", input)
        setCurrentUser(res.data)
    }

    const logout = async(input) => {
        await axios.post("http://127.0.0.1:5000/api/auth/logout", input)
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// GA GUNA