import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [username, setUsername] = useState("");
    const [secret, setSecret] = useState("");

    //if we have both the username and the secret, we know the user is logged in

    const value = {
        username, 
        setUsername, 
        secret, 
        setSecret
    }

    return <Context.Provider value = {value}>{children}</Context.Provider>
}