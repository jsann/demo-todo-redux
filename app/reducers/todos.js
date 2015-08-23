import {VisibilityFilters} from "./actions/sctions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp (state = initialState, action) {
  switch(action.type){
    case ADD_TODO:
      return {
        Object.assign({}, state, {
          todos: [...state.todos, {
            text: action.text,
            complete: false
          }]
        })
      }
    case SET_VISIBILITY_FILTER:
      return {
        Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      }
    case COMPLETE_TODO:
      return {
        Object.assign({}, state, {
          todos: [
            ...state.todos.slice(0, action.index),
            Object.assign({}, state.todos[action.index], {
              complete: true
            }),
            ...state.todos.slice(action.index + 1)
          ]
        })
      }
    default:
      return state;
  }
}
