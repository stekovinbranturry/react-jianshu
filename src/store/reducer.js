import { combineReducers } from 'redux-immutablejs';
import headerReducer from '../components/header/headerReducer';
import homeReducer from '../components/home/homeReducer';
import articleReducer from '../components/article/articleReducer';

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	article: articleReducer
});
