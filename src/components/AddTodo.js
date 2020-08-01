import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'

export default class AddTodo extends Component {
    state = {
        title: " "
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (

            <Form onSubmit={this.onSubmit} className="form-inline mb-3 fl">
                <Input name="title" placeholder="Add todos..." value={this.state.title} onChange={this.onChange}></Input>
                <Input type="submit" value="Add" style={{backgroundColor: '#123C69'}} className="btn-dark ml-1"/>
            </Form>

        )
    }
}
