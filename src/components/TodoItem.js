import React, { Component } from 'react'
import propTypes from 'prop-types';
import { ListGroupItem, Input, Button } from 'reactstrap';

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <ListGroupItem >
                <Input type="checkbox" className="ml-1" onChange={this.props.markComplete.bind(this, id)} />
                <div style={this.getStyle()} className="ml-4">
                    {title}
                    <Button onClick={this.props.delTodo.bind(this, id)} color='danger' className="float-right btn-sm">X</Button>
                </div>

            </ListGroupItem>

        )
    }
}






TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired,
}