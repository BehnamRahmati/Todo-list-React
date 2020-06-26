import React from 'react'

function TodoInput({ item, handleChange, handleSubmit, editItem }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input type="text" className="form-control text-capitalize" placeholder=" add todo item" value={item} onChange={handleChange} />
        </div>
        <button disabled={item ? false : true} type="submit" className={`btn ${editItem ? "btn-success" : "btn-primary"} text-uppercase btn-block my-3`}>{editItem ? "edit item" : "add item"}</button>
      </form>
    </div>
  )
}

export default TodoInput
