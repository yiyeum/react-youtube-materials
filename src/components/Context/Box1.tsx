import React from 'react'
import { Box, withStyles, WithStyles, Typography } from '@material-ui/core'
import { Box2 } from '../'

const styles = {
    root: {
        border: '2px solid #b9b9b9',
        width: 600,
        padding: 30
    }
}

const Box1Base = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Box className={classes.root}>
            <Typography variant='body1' color='primary'>Box1</Typography>
            <Box2 />
        </Box>
    )
}

export const Box1 = withStyles(styles)(Box1Base)