import {VisibilityFilters} from "../actions/actions.js";

/**
 * 初始状态
 * @type {Object}
 */
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

export function todoApp (state = initialState, action) {
  return {
    visibilityFilter: setVisibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

function todos (state = [], action) {
  switch(action.type){
    case ADD_TODO:
      return [...state.todos, {
        text: action.text,
        complete: false
      }]
    case COMPLETE_TODO:
      return [
        ...state.todos.slice(0, action.index),
        Object.assign({}, state.todos[action.index], {
          complete: true
        }),
        ...state.todos.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

function setVisibilityFilter (state = SHOW_ALL, action) {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}
