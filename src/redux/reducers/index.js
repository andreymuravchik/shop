import { combineReducers } from 'redux'

import filters from './filters'
import goods from './goods'
import cart from './cart'

const rootReducer = combineReducers({
  filters,
  goods,
  cart
})
export default rootReducer