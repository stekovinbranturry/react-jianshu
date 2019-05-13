import { combineReducers } from 'redux-immutablejs';
import headerReducer from '../components/header/headerReducer';

export default combineReducers({
	header: headerReducer
});
