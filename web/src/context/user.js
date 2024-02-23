import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props)=>{
    const [userId, setUserId] = useState();

    const changeUserId = (id)=>{
        setUserId(id);
    }

    return(
        <UserContext.Provider value={{userId, changeUserId}}>
            {props.children}
        </UserContext.Provider>
    )
}