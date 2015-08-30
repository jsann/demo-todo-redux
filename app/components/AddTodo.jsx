import React from "react";

export default class AddTodo extends React.Component {
  addTodoHandle(event) {
    const node = this.refs.todoInput.getDOMNode();
    this.props.addTodo(node.value.trim());
    node.value = "";
  }

  render() {
    return (
      <div>
        <input type="text" ref="todoInput" />
        <button onclick={this.addTodoHandle.bind(this)}>Add</button>
      </div>
    )
  }
}

AddTodo.propTypes = {
  addTodo: React.PropTypes.func.isRequired
}
