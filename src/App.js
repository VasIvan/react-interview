import React from 'react';
import Bar from './components/Bar'
import Hello from './components/Hello'
import { TodosProvider } from './contexts/TodosContext'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    frame: {
        background:"#d3f0db",
        color:"#388e3c",
        border: "5px solid #388e3c",
        borderRadius: "10px",
        boxShadow: "5px 5px 10px #81c784",
        padding: "20px 10px",
        margin: "50px auto"
    }

  }));


function App() {
    const classes = useStyles();
    return (
        <Container maxWidth={'xs'} className={classes.frame}>
            <TodosProvider>
                <Typography variant="h3" className="todo">TO DO ...</Typography>
                <Hello />
                <Bar />
            </TodosProvider>
        </Container>
    )}

export default App;
