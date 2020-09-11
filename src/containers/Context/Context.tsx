import React, { createContext } from 'react'
import { Box, Button } from '@material-ui/core'
import { DEFAULT_URL } from '../../constants'
import { Link } from 'react-router-dom'
import { Box1 } from '../../components'

interface IUserData {
    userId: string
    userName: string
}

const userData: IUserData = {
    userId: 'c5d86fcc-be17-46f3-ba42-0c8a312908bc',
    userName: 'Andrew'
}

export const UserContext = createContext(userData)

export const Context = () => {
    return (
        <UserContext.Provider value={userData}>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
                <Box1 />
            </Box>
        </UserContext.Provider>
    )
}
