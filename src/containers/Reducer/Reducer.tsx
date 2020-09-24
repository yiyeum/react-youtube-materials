import React from 'react'
import { Box, Button } from '@material-ui/core'
import { DEFAULT_URL } from '../../constants'
import { Link } from 'react-router-dom'

export const Reducer = () => {

    return (
        <>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
            </Box>
        </>
    )
}
