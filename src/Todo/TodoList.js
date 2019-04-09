import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                this.props.todo.map(item => <p>item.name</p>
            </div>
        )
    }
}

export default TodoList;
