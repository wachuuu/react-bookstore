import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const allItemsReducer = (state = books, action) => {
  let newState = [...state]
  let index
  switch (action.type) {
    case actions.ADD_NEW:
      newState.push(action.payload)
      return newState
    case actions.REMOVE:
      index = state.findIndex(item => item.id === action.payload.id)
      if (index >= 0) {
        newState.splice(index, 1)
      }
      return newState;
    case actions.UPDATE:
      index = state.findIndex(item => item.id === action.payload.id)
      if (index >= 0) {
        newState[index] = action.payload
      }
      return newState;
    default:
      return state;
  }
}

export default allItemsReducer
