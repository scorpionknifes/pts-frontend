import React, { useState, useEffect, createContext } from 'react'
import { Props, UserContextType } from '../Commons/ContextTypes';
import { UserCreate } from '../GraphQL/Queries/UserQuery';
import { useApolloClient } from "@apollo/client";

const UserContext = createContext({} as UserContextType);

const UserProvider = ({ children }: Props) => {
    const client = useApolloClient();
    const [userID, setUserID] = useState<number | null>(null)
    const [username, setUsername] = useState<string | null>("")

    useEffect(()=>{
        let localUserID = localStorage.getItem("userID")
        let localUsername = localStorage.getItem("username")
        if (localUserID === null || localUsername === null){
            const query = async() => {
                const {data} = await client.mutate({
                    mutation: UserCreate,
                })
                localStorage.setItem("userID",data.createUser.id)
                localStorage.setItem("username", data.createUser.name)
                setUserID(data.createUser.id)
                setUsername(data.createUser.name)
            }
            query()
        }else{
            setUserID(localUserID? parseInt(`${localUserID}`):null)
            setUsername(localUsername)
        }
        
    },[])

    return (
        <UserContext.Provider value={{
            userID,
            username
        }}>
            {children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider }