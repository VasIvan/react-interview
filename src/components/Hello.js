import React, {useContext} from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { Button, Grid } from '@material-ui/core';
import SettingsBackupRestoreRoundedIcon from '@material-ui/icons/SettingsBackupRestoreRounded';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import Alert from '@material-ui/lab/Alert';

function Hello() {
    const {todos, setTodos} = useContext(TodosContext)
    let color = ""

    const clr = (index) => {
        if (todos[index].complete === true) {
        return color = "success"
        } else {
            return color = "warning"
        }
    }

    const tgl = (index) =>{
        let todosCopy = [...todos]
        todosCopy[index].complete = !todosCopy[index].complete
        setTodos(todosCopy)
    }

    const dlt = (id) => {
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    return (
    <div>
        {todos.map((todo,index) =>
            <Grid container spacing={1} key={todo.id}>
                <Grid item xs={8}>
                    <Alert 
                        onClick={() => tgl(index)} 
                        severity={clr(index)}
                        style={{cursor:'pointer', wordBreak: "break-all"}}
                        >
                            <strong>{todo.name}</strong>
                    </Alert>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={() => tgl(index)}>
                            { todo.complete ? <SettingsBackupRestoreRoundedIcon /> : <CheckCircleOutlineRoundedIcon/>}
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button color="secondary" onClick={() => dlt(todo.id)}><HighlightOffRoundedIcon/></Button>
                </Grid>
            </Grid>)}
    </div>
    );
}

export default Hello
