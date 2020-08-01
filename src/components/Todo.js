import React, { Component } from 'react'
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

export default class Todo extends Component {
    render() {
        return (
            this.props.todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            )
            ));
    }
}





Todo.propTypes = {
    todo: propTypes.array.isRequired
}