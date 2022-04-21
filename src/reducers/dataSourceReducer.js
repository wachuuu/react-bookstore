import * as actions from '../actions/actionTypes';
import books from '../json/books.json';

const dataSourceReducer = (state = books, action) => {
  switch (action.type) {
    case actions.UPDATE_DS:
      console.log('[dataSourceReducer] update', action.payload, action);
      return action.payload
    default:
      console.log('[dataSourceReducer] default', state, action)
      return state;
  }
}

export default dataSourceReducer
