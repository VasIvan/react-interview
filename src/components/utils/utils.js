export const toggleLabelById = (items, id) =>{
    return items.map(todo => {
        if (todo.id === id){
            return {...todo, completed: !todo.completed}
        }
        return todo
    })
}