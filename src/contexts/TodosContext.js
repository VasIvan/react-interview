import * as React from 'react'

export const TodosContext = React.createContext()

export const initialState = [
    {id: 1, name: 'Go to the supermarket', completed: false},
    {id: 2, name: 'Call Alice', completed: false},
    {id: 3, name: 'Ask Alice to call Bob', completed: false},
    {id: 4, name: 'Do the dishes', completed: false},
    {id: 5, name: 'Change car tyres', completed: false}
]

export const TodosProvider = ({children}) => {
    
    const [todos, setTodos] = React.useState(initialState)
    
    return (
        <TodosContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContext.Provider>
    )
}
