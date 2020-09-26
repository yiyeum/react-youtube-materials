import React from 'react'
import { Typography, Box, WithStyles, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
    FORM_URL, STOPWATCH_URL, CONTEXT_URL, REDUCER_URL,
    TITLE_FORM, TITLE_STOPWATCH, TITLE_CONTEXT, TITLE_REDUCER
} from '../../constants'

const styles = {
    link: {
        backgroundColor: '#212121',
        color: '#ffffff',
        lineHeight: '1.4',
        textDecoration: 'none',
        fontSize: 20,
        borderRadius: '2px',
        '&:hover': {
            backgroundColor: '#424141'
        }
    }
}

const HomeBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Box p={6}>
            <Typography variant='h4'>React Materials</Typography>
            <ul>
                <li>
                    <Link className={classes.link} to={FORM_URL}>{TITLE_FORM}</Link>
                </li>
                <li>
                    <Link className={classes.link} to={STOPWATCH_URL}>{TITLE_STOPWATCH}</Link>
                </li>
                <li>
                    <Link className={classes.link} to={CONTEXT_URL}>{TITLE_CONTEXT}</Link>
                </li>
                <li>
                    <Link className={classes.link} to={REDUCER_URL}>{TITLE_REDUCER}</Link>
                </li>
            </ul>
        </Box>
    );
}

export const Home = withStyles(styles)(HomeBase)
