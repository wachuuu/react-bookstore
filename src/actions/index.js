import * as actions from './actionTypes'

export const addToStore = (data) => {
  return {
    type: actions.ADD_NEW,
    payload: data
  }
}

export const updateStore = (data) => {
  return {
    type: actions.UPDATE,
    payload: data
  }
}

export const removeFromStore = (data) => {
  return {
    type: actions.REMOVE,
    payload: data
  }
}

export const updateDataSource = (data) => {
  return {
    type: actions.UPDATE_DS,
    payload: data
  }
}
