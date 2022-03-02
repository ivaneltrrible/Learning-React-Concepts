import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  console.log(todos)
  return (
    <>
      <ul className='list-group list-group-flush'>
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </>
  )
}
/* 
<li 
    key={todo.id}
    className='list-group-item'
>
    <p className={todo.done ? 'complete text-center' : 'text-center'} key={todo.desc} onClick={ () => handleToggle(todo.id) }> { index+1 }. { todo.desc } </p>
    <button 
        className="btn btn-danger" 
        onClick={ () => handleDelete(todo.id) }
    >
        Borrar
    </button>
</li>
*/
