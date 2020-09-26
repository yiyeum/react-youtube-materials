import React, { useReducer, useState, createContext } from 'react'
import { Box, Button, TextField, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { uid } from 'react-uid'
import { DEFAULT_URL } from '../../constants'
import { Item } from '../../components'
import { ITask } from '../../models'

interface IState {
    list: ITask[]
}

type ActionType =
    | { type: 'save'; id: string; list: string; tag: string; }
    | { type: 'delete'; id: string }

const initialState: IState = {
    list: []
}

const taskData = {
    state: initialState,
    dispatch: () => null
}

const reducer = (state: IState, action: ActionType): IState => {
    switch (action.type) {
        case 'save':
            return { list: [...state.list, { id: action.id, name: action.list, tag: action.tag }] }
        case 'delete':
            return { list: [...state.list.filter(item => item.id !== action.id)] }
    }
}

export const TaskContext = createContext<{
    state: IState
    dispatch: React.Dispatch<any>
}>(taskData)

export const TaskList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [form, setForm] = useState({ item: '', tag: '' })

    const saveForm = (): void => {
        const formattedList: string = form.item.trim()
        const formattedTag: string = form.tag.trim()

        if (formattedList.length > 0 && formattedTag.length > 0) {
            dispatch({ type: 'save', id: uid(form), list: form.item, tag: form.tag })
            setForm({ item: '', tag: '' })
        }
    }

    return (
        <TaskContext.Provider value={{ state, dispatch }} >
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
                <Grid container>
                    <Grid item md={2}>
                        <TextField label='List' value={form.item} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, 'item': e.target.value }) }} />
                    </Grid>
                    <Grid item md={5}>
                        <TextField label='Tag' value={form.tag} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, 'tag': e.target.value }) }} />
                    </Grid>
                </Grid>
            </Box>
            <Box m={5}>
                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={saveForm}
                >
                    Save
                </Button>
            </Box>
            <Item />
        </TaskContext.Provider >
    )
}
