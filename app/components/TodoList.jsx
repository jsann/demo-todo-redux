import React from "react";
import TodoItem from "./TodoItem.jsx";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos && this.props.todos.map((todo, i) =>
            <TodoItem key={i} onclick={() => this.props.todoItemClick(i)} />
          )
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })),
  todoItemClick: React.PropTypes.func.isRequired
}
