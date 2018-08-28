import { combineReducers } from 'redux'
import twootReducer from './twootReducer'
import exampleReducer  from './exampleReducer'

export default combineReducers({
  twoots: twootReducer,
  example: exampleReducer
})
