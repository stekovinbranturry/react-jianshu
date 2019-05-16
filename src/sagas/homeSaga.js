import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as homeActions from '../components/home/homeActions';
// worker Saga: will be fired on homeActions.GET_TOPIC_LIST actions
function* getTopicList() {
	const res = yield axios.get('/data/topic-list.json');
	const list = res.data;
	const action = homeActions.createChangeTopicListAction(list);
	yield put(action);
}

/*
  Starts getTopicList on each dispatched `homeActions.GET_TOPIC_LIST` action.
  Allows concurrent fetches of user.
*/
function* homeSaga() {
	yield takeEvery(homeActions.GET_TOPIC_LIST, getTopicList);
}

export default homeSaga;
