'use client'
import { createContext,useState, useContext, ReactNode } from "react";

const UserContext = createContext({});

export const UserProvider = ({children} : any) => {
    const [user, setUser] = useState(null)

    const login = (userData : any) => {
        setUser(userData)
        console.log('User login saved')
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, login, logout}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);