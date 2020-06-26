import React from 'react'
import TodoItem from "./TodoItem"

function TodoList({ items, handleDelete, handleEdit, clearList }) {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalized text-center">todo list</h3>
      {items.map(item => <TodoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)} />)}
      <button type="button" onClick={clearList} className="btn btn-danger btn-block text-uppercase mt-5"> clear list</button>
    </ul>
  )
}

export default TodoList

