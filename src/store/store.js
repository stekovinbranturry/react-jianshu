import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import headerSaga from '../sagas/headerSage';
import homeSaga from '../sagas/homeSaga';
import articleSaga from '../sagas/articleSage';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(headerSaga);
sagaMiddleware.run(homeSaga);
sagaMiddleware.run(articleSaga);

export default store;
