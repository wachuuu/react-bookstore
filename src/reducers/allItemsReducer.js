import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const allItemsReducer = (state = books, action) => {
  switch (action.type) {
    case actions.ADD_NEW:
      console.log('addnew', [...state, action.payload], action);
      return [...state, action.payload]
    case actions.REMOVE:
      console.log('remove', state, action);
      return state;
    case actions.UPDATE:
      console.log('update', state, action);
      return state;
    default:
      console.log('default', state, action)
      return state;
  }
}

export default allItemsReducer
