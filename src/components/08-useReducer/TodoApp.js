import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer';
//import { useForm } from '../../hooks/useForm';

import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

/* -------------------------------------------------------------------------- */
/*                               useReducerInit                               */
/* -------------------------------------------------------------------------- */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

/* -------------------------------------------------------------------------- */
/*                             Export Component                               */
/* -------------------------------------------------------------------------- */
export const TodoApp = () => {


    const [ todos, dispatch] = useReducer(todoReducer, [], init)
    
    /* ----------------------- Cuando se modifique el TODOS ---------------------- */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
        
        /* return () => {
            effect
        }; */
    }, [todos])
    
    /* -------------------------------------------------------------------------- */
    /*                               Toggle en TODO                               */
    /* -------------------------------------------------------------------------- */
    const handleToggle = ( todoId ) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch( action )
    }
    const handleAddTodo = ( newTodo ) =>{
        console.log(newTodo)
        dispatch( {
            type: 'newTodo',
            payload: newTodo
        })
    }
    
    /* -------------------------------------------------------------------------- */
    /*                                Eliminar TODO                               */
    /* -------------------------------------------------------------------------- */
    const handleDelete = ( todoId ) => {
        
        const action = {
            type: 'delete',
            payload: todoId  
        }
        dispatch( action )
    }
    

    /* -------------------------------------------------------------------------- */
    /*                                  Componente                                 */
    /* -------------------------------------------------------------------------- */
    return (
        <>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos } handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>

            </div>
        </>    
    )
}
