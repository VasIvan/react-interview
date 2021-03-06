import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TodoBar from './components/TodoBar'
import TodoList from './components/TodoList'
import { TodosProvider } from './contexts/TodosContext'

const useStyles = makeStyles(() => ({
    frame: {
        background:"#d3f0db",
        color:"#388e3c",
        border: "5px solid #388e3c",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px #81c784",
        padding: "20px 10px",
        margin: "50px auto"
    }

  }))


function App() {
    const classes = useStyles()
    return (
        <Container maxWidth='xs' className={classes.frame}>
            <TodosProvider>
                <Typography variant="h3" className="todo">TO DO ...</Typography>
                <TodoList />
                <TodoBar />
            </TodosProvider>
        </Container>
    )}

export default App
