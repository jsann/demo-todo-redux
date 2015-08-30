import React from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}
