import { FETCH_TWOOTS, NEW_TWOOT } from '../actions/types'

const initialState = [

]

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TWOOTS:
      return [
        action.payload
      ]
    case NEW_TWOOT:
    return [
        ...state,
        action.payload
    ]
    default: return state
  }
}
