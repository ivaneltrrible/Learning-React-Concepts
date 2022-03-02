const initialState = [{
    id: 1,
    todo: 'Realizar la tarea',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload ]
    }

    return state
}
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Asistir a evento',
    done: false
}
const addTodoAction = {
    type: 'agregar',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction);
console.log(todos)