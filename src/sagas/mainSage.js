import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as headerActions from '../components/header/headerActions';
// worker Saga: will be fired on headerActions.GET_SEARCH_TIPS actions
function* getSearchTips() {
	const res = yield axios.get('/list.json');
	const random = Math.round(Math.random() * 10);
	const list = res.data.splice(random, random + 10);
	const action = headerActions.createChangeSearchTipsAction(list);
	yield put(action);
}

/*
  Starts getSearchTips on each dispatched `headerActions.GET_SEARCH_TIPS` action.
  Allows concurrent fetches of user.
*/
function* mainSaga() {
	yield takeEvery(headerActions.GET_SEARCH_TIPS, getSearchTips);
}

export default mainSaga;
