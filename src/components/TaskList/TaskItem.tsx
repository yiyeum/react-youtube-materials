import React, { useContext } from 'react'
import { IconButton, Typography, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { TaskContext } from '../../containers'
import { ITask, ITaskData } from '../../models'

interface IProps {
    item: ITask
}

export const TaskItem = ({ item }: IProps) => {
    const taskData: ITaskData = useContext(TaskContext)

    return (
        <Grid container>
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
    )
}

