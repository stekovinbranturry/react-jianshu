import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as headerActions from '../components/header/headerActions';
// worker Saga: will be fired on headerActions.GET_SEARCH_TIPS actions
function* getSearchTips() {
	const res = yield axios.get('/data/search-tips.json');
	const data = res.data;
	const listGroup = Math.ceil(data.length / 10);
	const random = Math.floor(Math.random() * listGroup);
	const list = data.splice(random * 10, random * 10 + 10);
	const action = headerActions.createChangeSearchTipsAction(list);
	yield put(action);
}

/*
  Starts getSearchTips on each dispatched `headerActions.GET_SEARCH_TIPS` action.
  Allows concurrent fetches of user.
*/
function* headerSaga() {
	yield takeEvery(headerActions.GET_SEARCH_TIPS, getSearchTips);
}

export default headerSaga;
