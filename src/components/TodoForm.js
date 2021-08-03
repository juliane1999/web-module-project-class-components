import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.setState,
            inputValue:e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleNewTask(this.state.inputValue);
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChanges}
                type='text' name='item' />
                <button onClick={this.handleClick}>Add</button>
            </form>
        );
    }
}

export default TodoForm;