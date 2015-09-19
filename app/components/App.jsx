import React from "react";
import {connect} from "react-redux";
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from "../actions/actions.js"
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import Filter from "./Filter.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo addTodo={text => this.props.dispatch(addTodo(text))} />
        <TodoList todos={this.props.visibleTodos} todoItemClick={i => this.props.dispatch(completeTodo(i))} />
        <Filter defaultFilter={this.props.visibilityFilter} onFilterChange={nextFilter => this.props.dispatch(setVisibilityFilter(nextFilter))} />
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
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
