import React from "react";

export default class TodoItem extends React.Component {
  render() {
    return (
      <li onclick={this.todoItemClick()} style={{textDecoration: this.props.completed ? "line-through" : "none", cursor: this.props.completed ? "default" : "pointer"}}>{this.props.text}</li>
    )
  }
}

TodoItem.propTypes = {
  todoItemClick: React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired
}
