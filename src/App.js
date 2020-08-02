import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { ListGroup, CardBody, Card } from 'reactstrap';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo'
import about from './pages/about';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos:res.data}))
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,completed:false
  })
    .then(res => this.setState({todos: [...this.state.todos,res.data]}));
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
