import React, { Component } from 'react';
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [{ id: 1, title: "itemOne" }, { id: 2, title: "itemTwo" }],
      id: uuidv4(),
      item: "",
      editItem: false,

    }
  }

  handleChange = (e) => { console.log("handlechange"); }
  handleSubmit = (e) => { console.log("handleSubmit"); }
  clearList = () => { console.log("handleSubmit"); }
  handleDelete = (id) => { console.log("handleDelete"); }
  handleDelete = (id) => { console.log("handleDelete"); }
  handleEdit = (id) => { console.log("handleEdit"); }

  render() {
    const { item, editItem, items } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={editItem} />
            <TodoList items={items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} clearList={this.clearList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
