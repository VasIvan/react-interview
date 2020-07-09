import * as React from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded'
import Alert from '@material-ui/lab/Alert'

import { TodosContext } from '../contexts/TodosContext'

const Bar = () => {
    const {todos, setTodos} = React.useContext(TodosContext)
    const { register, handleSubmit, reset, errors} = useForm()

    const onSubmit = data => {
        const maxId = Math.max(...todos.map(todo => todo.id))
        const newTodos = todos.concat({
            id: maxId + 1,
            name: data.name,
            completed: false
        })
        
        setTodos(newTodos)
        reset()
    }

    return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{margin: '10px auto'}}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            color="secondary"
                            variant="outlined"
                            label="Add new todo"
                            fullWidth
                            name="name"
                            inputRef={register({
                                required: 'Todo required', 
                                minLength: {value:1, message: 'Todo Min. lenght 1'}
                            })}
                        />
                    </Grid>
                    {errors.name &&  
                        <Grid item xs={12}>
                            <Alert variant="outlined" severity="error">
                                {errors.name.message}
                            </Alert>
                        </Grid>
                    }
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="outlined"
                            style={{ height: "56px"}}
                            startIcon={<AddIcon />}>
                                Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
    )
}

export default Bar
