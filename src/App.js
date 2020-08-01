import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { ListGroup, CardBody, Card } from 'reactstrap';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid';
import about from './pages/about';

class App extends Component {
  state = {
    todos: [
      {

        id: uuid.v4(),
        title: "Buy cookies",
        completed: false
      },
      {

        id: uuid.v4(),
        title: "Upload video to YouTube",
        completed: false
      },
      {

        id: uuid.v4(),
        title: "Interview at 11:00 am tomorrow",
        completed: false
      },
    ]
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })

    });
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {

    return (
      <Router>
      <div className="App">
        <Header />
        <Card className="shadow-sm m-3">
          <Route exact path="/" render={props =>(
            <>
            <CardBody>
            <AddTodo addTodo={this.addTodo} />
            <h4>Todo List</h4>
            <ListGroup>
              <Todo todo={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </ListGroup>
          </CardBody>
            </>
          )}/>
          <Route path="/about" component={about}/>
        </Card>
        
      </div>
      </Router>
    );
  }
}
export default App;
