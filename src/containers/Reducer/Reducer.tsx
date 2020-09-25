import React, { useReducer, useState } from 'react'
import { Box, Button, TextField, Grid, IconButton, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { uid } from 'react-uid'
import { DEFAULT_URL } from '../../constants'

interface IList {
    id: string
    name: string
    tag: string
}

interface IState {
    list: IList[]
}

type ActionType =
    | { type: 'save'; id: string; list: string; tag: string; }
    | { type: 'delete'; id: string }

const initialState: IState = {
    list: []
}

const reducer = (state: IState, action: ActionType): IState => {
    switch (action.type) {
        case 'save':
            return { list: [...state.list, { id: action.id, name: action.list, tag: action.tag }] }
        case 'delete':
            return { list: [...state.list.filter(item => item.id !== action.id)] }
    }
}

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [form, setForm] = useState({ list: '', tag: '' })

    const saveForm = () => {
        const formattedList: string = form.list.trim()
        const formattedTag: string = form.tag.trim()

        if (formattedList.length > 0 && formattedTag.length > 0) {
            dispatch({ type: 'save', id: uid(form), list: form.list, tag: form.tag })
            setForm({ list: '', tag: '' })
        }
    }

    return (
        <>
            <Box m={1}>
                <Link to={DEFAULT_URL}><Button>Back to Home</Button></Link>
            </Box>
            <Box m={5}>
                <Grid container>
                    <Grid item md={2}>
                        <TextField label='List' value={form.list} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, 'list': e.target.value }) }} />
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
            <Box m={5}>
                <ul>
                    {
                        state.list.length > 0 &&
                        state.list.map((item: IList) => (
                            <Grid container key={item.id}>
                                <Grid item md={4}>
                                    <Typography variant='body1'>{item.name}</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <IconButton
                                        size="small"
                                        aria-label="delete"
                                        onClick={() => dispatch({ type: 'delete', id: item.id })}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))
                    }
                </ul>
            </Box>
        </>
    )
}
