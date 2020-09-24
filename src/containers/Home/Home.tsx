import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FORM_URL, FORM, STOPWATCH_URL, CONTEXT_URL, STOPWATCH, CONTEXT, REDUCER_URL, REDUCER } from '../../constants'

export const Home = () => {
    return (
        <Box p={6}>
            <Typography variant='h4'>React Materials</Typography>
            <ul>
                <li>
                    <Link to={FORM_URL}>{FORM}</Link>
                </li>
                <li>
                    <Link to={STOPWATCH_URL}>{STOPWATCH}</Link>
                </li>
                <li>
                    <Link to={CONTEXT_URL}>{CONTEXT}</Link>
                </li>
                <li>
                    <Link to={REDUCER_URL}>{REDUCER}</Link>
                </li>
            </ul>
        </Box>
    );
}