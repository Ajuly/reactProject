import { createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reduxLogger from 'redux-logger'

// store.getState = {home:{currentLesson:'0'}

let store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise,reduxLogger));
window._store  = store;

export default store;


