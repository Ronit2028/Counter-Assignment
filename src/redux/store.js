import { createStore } from 'redux'
import counterReducers from './reducers/counterReducers'

const myStore = createStore(counterReducers)

export default myStore