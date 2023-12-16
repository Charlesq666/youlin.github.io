'use client'
import { createContext, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}

type props = {
    children: React.ReactNode
}
export const Authcontext = createContext<AuthContextType>({} as AuthContextType);
export const AuthProvider = (props: props) => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Authcontext.Provider value={{ isLoggedIn, login, logout }}>
            {props.children}
        </Authcontext.Provider>
    ) 
}