import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as homeActions from '../components/home/homeActions';
// worker Saga: will be fired on homeActions.GET_TOPIC_LIST actions
function* getList(json, actionCreator) {
	const res = yield axios.get(json);
	const list = res.data;
	const action = actionCreator(list);
	yield put(action);
}

function* getTopicList() {
	yield getList(
		'/data/topic-list.json',
		homeActions.createChangeTopicListAction
	);
}

function* getAuthorList() {
	yield getList(
		'/data/author-list.json',
		homeActions.createChangeAuthorListAction
	);
}

/*
  Starts getTopicList on each dispatched `homeActions.GET_TOPIC_LIST` action.
  Allows concurrent fetches of user.
*/
function* homeSaga() {
	yield takeEvery(homeActions.GET_TOPIC_LIST, getTopicList);
	yield takeEvery(homeActions.GET_AUTHOR_LIST, getAuthorList);
}

export default homeSaga;
