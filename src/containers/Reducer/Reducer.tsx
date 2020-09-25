import React, { useReducer, useState } from 'react'
import { Box, Button, TextField, Grid } from '@material-ui/core'
import { DEFAULT_URL } from '../../constants'
import { Link } from 'react-router-dom'

interface IState {
    task: string[]
    category: string[]
}

type ActionType =
    | { type: 'save'; task: string; category: string }

const initialState: IState = {
    task: [],
    category: []
}

const reducer = (state: IState, action: ActionType) => {
    switch (action.type) {
        case 'save':
            return { task: [...state.task, action.task], category: [...state.category, action.category] }
    }
}

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [form, setForm] = useState({ task: '', category: '' })

    return (
        <>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
                <Grid container>
                    <Grid item md={2}>
                        <TextField label='Task' value={form.task} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, 'task': e.target.value }) }} />
                    </Grid>
                    <Grid item md={5}>
                        <TextField label='Category' value={form.category} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, 'category': e.target.value }) }} />
                    </Grid>
                </Grid>
            </Box>
            <Box m={5}>
                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={() => dispatch({ type: 'save', task: form.task, category: form.category })}
                >
                    Save
                </Button>
            </Box>
        </>
    )
}
