import React, { useRef } from 'react'
import UserContext from './user_context'

const UserProvider = (props) => {
    const isUser = useRef()

    const updateUser = (data) => {
        isUser.current = data;
    }
    return (
        <UserContext.Provider value={{ isUser, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider