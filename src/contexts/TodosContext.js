import React, {useState, createContext} from 'react'

export const TodosContext = createContext()

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {id: 1, name: 'Go to the supermarket', complete: false},
        {id: 2, name: 'Call Alice', complete: false},
        {id: 3, name: 'Ask Alice to call Bob', complete: false},
        {id: 4, name: 'Do the dishes', complete: false},
        {id: 5, name: 'Change car tyres', complete: false}
    ])
    
    return (
        <TodosContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContext.Provider>
    )
}
