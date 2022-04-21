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
    type: actions.DELETE,
    payload: data
  }
}
