import React from "react";
import {connect} from "react-redux";
import {addTodo, completeTodo, setVisiblityFilter, VisibilityFilters} from "../actions/actions.js"
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo addTodo={text => this.props.dispatch(addTodo(text))} />
        <TodoList todos={this.props.visibleTodos} todoItemClick={i => this.props.dispatch(completeTodo(i))} />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })),
  VisibilityFilters: React.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
}

function selectTodos(todos, filter) {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todos => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todos => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
