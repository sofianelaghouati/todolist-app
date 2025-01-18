import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleRemove() {
        this.props.removeTodo(this.props.id)
    }

    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt){
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    handleToggle(evt){
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type='text'
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed?'Todo-task completed':'Todo-task'} onClick={this.handleToggle}>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            )
        }
        return result
    }
}

export default Todo