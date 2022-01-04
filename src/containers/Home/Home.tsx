import React from 'react'
import { Typography, Box, WithStyles, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
    FORM_URL, STOPWATCH_URL, CONTEXT_URL, REDUCER_URL,
    TITLE_FORM, TITLE_STOPWATCH, TITLE_CONTEXT, TITLE_REDUCER, TITLE_STATE_OBJECT, STATE_URL
} from '../../constants'

const styles = {
    link: {
        lineHeight: '1.4',
        textDecoration: 'none',
        fontSize: 20,
        borderRadius: '2px',
    },
    style1: {
        backgroundColor: '#212121',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#424141'
        }
    },
    style2: {
        backgroundColor: '#aab5d1',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#bfc9e3'
        }
    }
}

const HomeBase = (props: WithStyles<typeof styles>) => {
    const { link, style1, style2 } = props.classes

    return (
        <Box p={6}>
            <Typography variant='h4'>React Materials</Typography>
            <ul>
                <li>
                    <Link className={`${link} ${style1}`} to={FORM_URL}>{TITLE_FORM}</Link>
                </li>
                <li>
                    <Link className={`${link} ${style1}`} to={STOPWATCH_URL}>{TITLE_STOPWATCH}</Link>
                </li>
                <li>
                    <Link className={`${link} ${style1}`} to={CONTEXT_URL}>{TITLE_CONTEXT}</Link>
                </li>
                <li>
                    <Link className={`${link} ${style1}`} to={REDUCER_URL}>{TITLE_REDUCER}</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className={`${link} ${style2}`} to={STATE_URL}>{TITLE_STATE_OBJECT}</Link>
                </li>
            </ul>
        </Box>
    );
}

export const Home = withStyles(styles)(HomeBase)
