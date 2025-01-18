import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newTodo = {...this.state, id: uuidv4()}
        this.props.createTodo(newTodo)
        this.setState({
            task:""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New Todo</label>
                    <input
                        id='task'
                        type="text"
                        name="task"
                        placeholder='NEW TODO'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Add a todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTodoForm