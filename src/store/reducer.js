import { combineReducers } from 'redux-immutablejs';
import headerReducer from '../components/header/headerReducer';
import homeReducer from '../components/home/homeReducer';
import articleReducer from '../components/article/articleReducer';
import loginReducer from '../components/login/loginReducer';

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	article: articleReducer,
	login: loginReducer
});
