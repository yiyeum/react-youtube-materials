import React, { useEffect, useState } from 'react'
import { Box, withStyles, WithStyles, Button, Grid, Typography } from '@material-ui/core'
import { DEFAULT_URL } from '../../constants'
import { Link } from 'react-router-dom'

const styles = {
    root: {
        width: '200px',
        border: '3px dashed #ffd5ce',
        margin: '0 auto'
    },

}

const StopwatchBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (start) {
            let timeId = setInterval(() => { setTime(prevTime => prevTime + 0.1) }, 100)
            return () => clearInterval(timeId)
        }
    }, [start])

    return (
        <>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5} className={classes.root}>
                <Grid container justify='center'>
                    <Grid item xs={12} sm={12} md={12}><Typography variant='h3' style={{ textAlign: 'center' }}>{time.toFixed(1)}</Typography></Grid>
                    <Grid item>
                        {
                            start ?
                                <Button onClick={() => setStart(false)}>Pause</Button>
                                :
                                <Button onClick={() => setStart(true)}>Start</Button>
                        }
                        <Button onClick={() => { setTime(0); setStart(false) }}>Stop</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export const Stopwatch = withStyles(styles)(StopwatchBase)