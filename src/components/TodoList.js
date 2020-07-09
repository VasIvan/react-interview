import * as React from 'react'
import { Grid } from '@material-ui/core'

import TodoListLabel from './TodoListLabel'
import TodoListActions from './TodoListActions'

import { TodosContext } from '../contexts/TodosContext'

const TodoList = () => {
    const {todos} = React.useContext(TodosContext)

    return (
    <>
        {todos.map( todo =>
            <Grid container spacing={1} key={todo.id}>
                <TodoListLabel id={todo.id} name={todo.name} completed={todo.completed}/>
                <TodoListActions id={todo.id} completed={todo.completed} />
            </Grid>)}
    </>
    )
}

export default TodoList
