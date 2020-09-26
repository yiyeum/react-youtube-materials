import React, { useContext } from 'react'
import { Box, IconButton, Typography, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { TaskContext } from '../../containers'
import { ITask } from '../../models'

export const Item = () => {
    const taskData = useContext(TaskContext)

    return (
        <Box m={5}>
            {
                taskData.state.list.length > 0 &&
                taskData.state.list.map((item: ITask) => (
                    <Grid container key={item.id}>
                        <Grid item md={3}>
                            <Typography variant='body1' color='textPrimary'>{item.name}</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant='body1' color='textSecondary'>{item.tag}</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <IconButton
                                size="small"
                                aria-label="delete"
                                onClick={() => taskData.dispatch({ type: 'delete', id: item.id })}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))
            }
        </Box>
    )
}

