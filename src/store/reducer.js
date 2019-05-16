import { combineReducers } from 'redux-immutablejs';
import headerReducer from '../components/header/headerReducer';
import homeReducer from '../components/home/homeReducer';

export default combineReducers({
	header: headerReducer,
	home: homeReducer
});
