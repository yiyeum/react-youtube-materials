import React, { createContext, useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { DEFAULT_URL } from '../../constants'
import { Link } from 'react-router-dom'
import { Box1 } from '../../components'

interface IUserData {
    userName: string
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const userData: IUserData = {
    userName: '',
    setUserName: () => { }
}

export const UserContext = createContext(userData)

export const Context = () => {
    const [userName, setUserName] = useState('Andrew')

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
                <Box1 />
            </Box>
        </UserContext.Provider>
    )
}
