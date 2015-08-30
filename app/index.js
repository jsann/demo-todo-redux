import React from "react";
import {createStore} from "redux";
import todoApp from "./reducers/todos.js";
import App from "./components/App.jsx";
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from "./actions/actions.js";

// let store = createStore(todoApp);

React.render(
  <App />,
  document.getElementById("demo-todo")
)
