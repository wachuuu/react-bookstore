import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const allItemsReducer = (state = books, action) => {
  let newState = [...state]
  let index
  switch (action.type) {
    case actions.ADD_NEW:
      const newId = Math.max.apply(Math, newState.map(item => item.id)) + 1
      newState.push({...action.payload, id: newId})
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
