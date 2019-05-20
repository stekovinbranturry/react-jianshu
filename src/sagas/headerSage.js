import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as headerActions from '../components/header/headerActions';

function* getSearchTips() {
	const res = yield axios.get('/api/search-tips.json');
	const data = res.data;
	const listGroup = Math.ceil(data.length / 10);
	const random = Math.floor(Math.random() * listGroup);
	const list = data.splice(random * 10, random * 10 + 10);
	const action = headerActions.createChangeSearchTipsAction(list);
	yield put(action);
}

function* headerSaga() {
	yield takeEvery(headerActions.GET_SEARCH_TIPS, getSearchTips);
}

export default headerSaga;
