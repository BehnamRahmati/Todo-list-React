import React, { Component } from 'react';
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      id: uuidv4(),
      item: "",
      editItem: false,

    }
  }

  handleChange = (e) => this.setState({ item: e.target.value })
  handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const NewItem = { id: this.state.id, title: this.state.item }
    const updatedItems = [...this.state.items, NewItem];
    this.setState({ items: updatedItems, item: "", id: uuidv4(), editItem: false })
  }
  clearList = () => { this.setState({ items: [] }) }
  handleDelete = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filterdItems });
  }
  handleEdit = (id) => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterdItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }

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
