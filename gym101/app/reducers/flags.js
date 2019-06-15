import {
  types
} from '@actions'

const defaultState = {
  isLoading: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_IS_APP_LOADING:
      return Object.assign({}, state, { isLoading: action.payload })
    default:
      return state
  }
}