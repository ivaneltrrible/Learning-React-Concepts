import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const userCurrent = useContext(UserContext)
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <p>{userCurrent.name}</p>

        </div>
    )
}