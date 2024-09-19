'use client'
import { createContext, useState, useContext,useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {


    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("Inside use effect")
        async function func(){
             const storedUser = localStorage.getItem('user');
            if (storedUser) {
              setUser(JSON.parse(storedUser));
            }

        }
        func()
    }, []) 


    const login = async (userData: any) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('User login saved');
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }


    return (
        <UserContext.Provider value={{ user, login, logout }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);