import { combineReducers } from 'redux'
// combineReducers : high level component where wil store our all reducers...
import cardItems from './Reducer'

combineReducers({
    cardItems
});

export default cardItems