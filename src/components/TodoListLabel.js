import * as React from 'react'
import { Grid } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { TodosContext } from '../contexts/TodosContext'
import { toggleLabelById } from './utils/utils'

const TodoListLabel = (props) => {
    const { id, name, completed } = props
    const { todos, setTodos } = React.useContext(TodosContext)

    const handleToggle = () => setTodos(toggleLabelById(todos, id))
    return (
        <Grid item xs={8}>
            <Alert 
                onClick={handleToggle} 
                severity={completed ? 'success' : 'warning'}
                style={{cursor:'pointer', wordBreak: "break-all"}}
                >
                    <strong>{name}</strong>
            </Alert>
        </Grid>
    )
}

export default TodoListLabel