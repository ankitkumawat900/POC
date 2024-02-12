import {applyMiddleware, createStore} from 'redux'
import rootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(SagaData);

export default store