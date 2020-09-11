import React from 'react'
import { Box, withStyles, WithStyles, Typography } from '@material-ui/core'
import { Box3 } from '../'

const styles = {
    root: {
        border: '2px solid #b9b9b9',
        width: 300,
        margin: '0 auto',
        padding: 30
    }
}

const Box2Base = (props: WithStyles<typeof styles>) => {
    const { classes } = props

    return (
        <Box className={classes.root}>
            <Typography variant='body1' color='primary'>Box2</Typography>
            <Box3 />
        </Box>
    )
}

export const Box2 = withStyles(styles)(Box2Base)