import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const dataSourceReducer = (state = books, action) => {
  switch (action.type) {
    case actions.ADD_NEW:
      console.log('addnew', [...state, action.payload], action);
      return [...state, action.payload]
    case actions.CLEAR:
      console.log('clear', state, action);
      return [];
    case actions.UPDATE:
      console.log('update', state, action);
      return [...action.payload];
    default:
      console.log('default', state, action)
      return state;
  }
}

export default dataSourceReducer
