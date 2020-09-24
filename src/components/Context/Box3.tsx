import React, { useContext } from 'react'
import { Box, withStyles, WithStyles, Typography } from '@material-ui/core'
import { UserContext } from '../../containers'
import { Box4 } from './Box4'

const styles = {
    root: {
        border: '2px solid #b9b9b9',
        width: 150,
        margin: '0 auto',
        padding: 15
    }
}

const Box3Base = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const userData = useContext(UserContext)

    return (
        <Box className={classes.root}>
            <Typography variant='body1' color='primary'>Box3</Typography>
            <Typography variant='body2' color='textPrimary'>{userData.userName}</Typography>
            <Box mb={2}>
                <button onClick={() => userData.setUserName('King')}>click</button>
            </Box>
            <Box4 />
        </Box>
    )
}

export const Box3 = withStyles(styles)(Box3Base)