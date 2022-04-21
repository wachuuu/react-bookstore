import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const dataSourceReducer = (state = books, action) => {
  switch (action.type) {
    case actions.UPDATE_DS:
      return action.payload
    default:
      return state;
  }
}

export default dataSourceReducer
