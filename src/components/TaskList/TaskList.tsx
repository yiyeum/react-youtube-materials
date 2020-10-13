import React, { useContext } from 'react'
import { Box } from '@material-ui/core'
import { TaskContext } from '../../containers'
import { ITask, ITaskData } from '../../models'
import { TaskItem } from './'

export const TaskList = () => {
    const taskData: ITaskData = useContext(TaskContext)

    return (
        <Box m={5}>
            {
                taskData.state.list.length > 0 &&
                taskData.state.list.map((item: ITask) => (
                    <TaskItem key={item.id} item={item} />
                ))
            }
        </Box>
    )
}

