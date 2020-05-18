import React, { useState } from 'react'
import { Box, TextField, Select, MenuItem, Typography, withStyles, WithStyles } from '@material-ui/core'

interface IRole {
    id: number
    role: string
}

const roleArr: IRole[] = [
    { id: 0, role: 'Student' },
    { id: 1, role: 'Developer' }
]

const styles = {
    root: {
        border: '3px dashed tomato'
    }
}

const FormBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props
    const [fullName, setFullName] = useState('')
    const [age, setAge] = useState(0)
    const [role, setRole] = useState(roleArr[0].role)

    return (
        <>
            <Box m={5} className={classes.root}>
                <Box m={5}>
                    <Typography variant='h6'>Please fill the form</Typography>
                </Box>
                <Box m={5}>
                    <TextField label='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth />
                </Box>
                <Box m={5}>
                    <TextField type='number' label='Age' value={age} onChange={(e) => setAge(parseInt(e.target.value))} fullWidth />
                </Box>
                <Box m={5}>
                    <Select value={role} name='Role' onChange={(e: any) => setRole(e.target.value)} fullWidth>
                        {
                            roleArr.map((item: IRole) => <MenuItem key={item.id} value={item.role}>{item.role}</MenuItem>)
                        }
                    </Select>
                </Box>
            </Box>
            <Box m={5} p={5} className={classes.root}>
                <Box mb={3}>
                    <Typography variant='h6'>Form state</Typography>
                </Box>
                <Typography>Full name: {fullName}</Typography>
                <Typography>Age: {age}</Typography>
                <Typography>Role: {role}</Typography>
            </Box>
        </>
    )
}

export const Form = withStyles(styles)(FormBase)