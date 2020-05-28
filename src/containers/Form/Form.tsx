import React, { useState } from 'react'
import { Box, TextField, Typography, withStyles, WithStyles } from '@material-ui/core'

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
    const [form, setForm] = useState({ fullName: '', age: 0 })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Box m={5} className={classes.root}>
                <Box m={5}>
                    <Typography variant='h6'>Please fill the form</Typography>
                </Box>
                <Box m={5}>
                    <TextField label='Full Name' value={form.fullName} name='fullName' onChange={handleForm} fullWidth />
                </Box>
                <Box m={5}>
                    <TextField type='number' label='Age' value={form.age} name='age' onChange={handleForm} fullWidth />
                </Box>
            </Box>

            <Box m={5} p={5} className={classes.root}>
                <Box mb={3}>
                    <Typography variant='h6'>Form state</Typography>
                </Box>
                <Typography>Full name: {form.fullName}</Typography>
                <Typography>Age: {form.age}</Typography>
            </Box>
        </>
    )
}

export const Form = withStyles(styles)(FormBase)