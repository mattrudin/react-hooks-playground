import React, { useContext } from 'react'
import { userContext } from '../App'

const ShowContext = () => {
    const userInfo = useContext(userContext)
    const { isLoggedIn, isAdmin } = userInfo

    return(
        <div>
            <h1>{isLoggedIn ? 'You are logged in' : 'You are not logged in'}</h1>
            <h1>{isLoggedIn ? (isAdmin ? 'You are admin :)' : 'You are not admin :(') : null}</h1>
        </div>
    )
}

export default ShowContext