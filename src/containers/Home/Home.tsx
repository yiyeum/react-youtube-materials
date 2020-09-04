import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FORM_URL, FORM, STOPWATCH_URL, STOPWATCH } from '../../constants';

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
            </ul>
        </Box>
    );
}