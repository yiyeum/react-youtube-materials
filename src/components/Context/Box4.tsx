import React, { useContext } from 'react'
import { Box, withStyles, WithStyles, Typography } from '@material-ui/core'
import { UserContext } from '../../containers'

const styles = {
    root: {
        border: '2px solid #b9b9b9',
        width: 70,
        margin: '0 auto',
        padding: 5,
    }
}

const Box4Base = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const userData = useContext(UserContext)

    return (
        <Box className={classes.root}>
            <Typography variant='body1' color='primary'>Box4</Typography>
            <Typography variant='body2' color='textPrimary'>{userData.userName}</Typography>
        </Box>
    )
}

export const Box4 = withStyles(styles)(Box4Base)