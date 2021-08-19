import React from 'react';
import './App.css';
import List from './List';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      todos: [{task:'A todo list', id:uuidv4()},{task:'Using React', id:uuidv4()}, {task:'Double click', id:uuidv4()}, {task:'To complete a task', id:uuidv4()}],
      newTask: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange (evt) {
    this.setState({newTask: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if(this.state.newTask.length === 0) return;
    this.setState({todos: [...this.state.todos, {task:this.state.newTask, id:uuidv4()}], newTask:''})
  }

  deleteItem(id) {

   const currentTodos = this.state.todos;
   const result = currentTodos.filter((item)=>{
    return item.id !== id;
   });
   this.setState({todos: result})
  }

  render () {
    return (
      <div className="wrapper">
        <div className="container">
          <h1 className="list-title">My Todolist</h1>
          <List 
          todos={this.state.todos}
          id={uuidv4()}
          deleteItem={this.deleteItem}
          />
          <div className="add-form-container">
            <form className="add-form" onSubmit={this.handleSubmit}>
              <input value={this.state.newTask} onChange={this.handleChange} type="text"></input>
              <button>Add Task</button>
            </form>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
