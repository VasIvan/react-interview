import React, {useContext} from 'react'
import { TodosContext } from '../contexts/TodosContext'
import { useForm } from 'react-hook-form'
import { TextField, Button, Grid } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Alert from '@material-ui/lab/Alert';

function Bar() {
    const {todos, setTodos} = useContext(TodosContext)
    //console.log(todos)
    const { register, handleSubmit, reset, errors} = useForm()

    // Create uniq ID
    const newId = Math.max.apply(Math, todos.map(function(o) {
        return o.id
      })) + 1 

    const onSubmit = data => {
        setTodos([
            ...todos, {
                id: newId,
                name: data.name,
                complete: false
            }]
        )
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
                            inputRef={register({required: 'Todo required', minLength: {value:1, message: 'Todo Min. lenght 1'}})}
                        />
                    </Grid>
                    {errors.name &&  <Grid item xs={12}><Alert variant="outlined" severity="error">{errors.name.message}</Alert></Grid>}
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="outlined"
                            style={{ height: "56px"}}
                            startIcon={<AddCircleOutlineRoundedIcon />}>
                                Add
                        </Button>
                    </Grid>
                </Grid>
            </form>
    )
}

export default Bar
