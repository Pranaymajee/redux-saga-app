import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index'

/* compose PROVIDES FUNCTIONAL PROGRAMMING UTILITY, AND IS INCLUDED IN REDUX AS A CONVENIENCE.
YOU MIGHT WANT TO USE IT TO APPLY SEVERAL STORE ENHANCERS IN A ROW. */

// CREATING A MIDDLEWARE USING THE FACTORY FUNCTION createSagaMiddleware EXPORTED BY THE REDUX-SAGA LIBRARY.
const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)) // IF WE DON'T USE compose

sagaMiddleware.run(rootSaga);

export default store;