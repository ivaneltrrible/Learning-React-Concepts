import React from 'react'

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <>
            <li
                key={todo.id}
                className='list-group-item'
                >
                <p 
                    className={todo.done ? 'complete text-center' : 'text-center'} 
                    key={todo.desc}
                    onClick={() => handleToggle(todo.id)}> {index + 1}. {todo.desc} 
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                    >
                    Borrar
                </button>
            </li>
        </>
    )
}
