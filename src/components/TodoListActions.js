import * as React from 'react'
import { Grid, Button } from '@material-ui/core'
import CompletedIcon from '@material-ui/icons/SettingsBackupRestoreRounded'
import NotCompletedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import DeleteIcon from '@material-ui/icons/HighlightOffRounded'

import { TodosContext } from '../contexts/TodosContext'
import { toggleLabelById } from './utils/utils'

const TodoListActions = (props) => {
    const {id, completed} = props
    const {todos, setTodos} = React.useContext(TodosContext)

    const handleToggle = () => setTodos(toggleLabelById(todos, id))
    const handleDelete = () => setTodos(todos.filter(todo => todo.id !== id))
    
    return (
        <>
            <Grid item xs={2}>
                <Button
                    onClick={handleToggle}
                >
                    { completed ? <CompletedIcon /> : <NotCompletedIcon/>}
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button color="secondary" onClick={handleDelete}>
                    <DeleteIcon/>
                </Button>
            </Grid>
        </>
    )
}

export default TodoListActions