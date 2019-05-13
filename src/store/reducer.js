import { combineReducers } from 'redux';
import headerReducer from '../components/header/headerReducer';

export default combineReducers({
	header: headerReducer
});
