import React from 'react'

function TodoItem({ handleDelete, title, handleEdit }) {
  return (
    <div className="list-group-item text-capitalize d-flex justify-content-between align-items-center my-2">
      <h6 className="m-0">{title}</h6>
      <div>
        <span style={{ curser: "pointer" }} onClick={handleDelete} ><i className="fas fa-trash mx-2 text-danger "></i></span>
        <span style={{ curser: "pointer" }} onClick={handleEdit}><i className="fas fa-pen text-success"></i></span>
      </div>

    </div>
  )
}

export default TodoItem
