import _ from "underscore";
import {VisibilityFilters} from "../actions/actions.js";

/**
 * 初始状态
 * @type {Object}
 */
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

export default function todoApp (state = initialState, action) {
  return {
    visibilityFilter: setVisibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

function todos (todos = [], action) {
  switch(action.type){
    case "ADD_TODO":
      return [...todos, {
        text: action.text,
        complete: false
      }]
    case "COMPLETE_TODO":
      return [
        ...todos.slice(0, action.index),
        _.extend({}, todos[action.index], {
          complete: true
        }),
        ...todos.slice(action.index + 1)
      ]
    default:
      return todos;
  }
}

function setVisibilityFilter (state = SHOW_ALL, action) {
  switch(action.type){
    case "SET_VISIBILITY_FILTER":
      return action.filter
    default:
      return state;
  }
}
