import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Adjust the path if needed
import rootSaga from './sagas'; // Adjust the path if needed

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga(s)
sagaMiddleware.run(rootSaga);

export default store;
