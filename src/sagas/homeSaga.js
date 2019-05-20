import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as homeActions from '../components/home/homeActions';

function* getList(json, actionCreator) {
	const res = yield axios.get(json);
	const list = res.data;
	const action = actionCreator(list);
	yield put(action);
}

function* getTopicList() {
	yield getList(
		'/api/topic-list.json',
		homeActions.createChangeTopicListAction
	);
}

function* getAuthorList() {
	yield getList(
		'/api/author-list.json',
		homeActions.createChangeAuthorListAction
	);
}

function* updateAuthorList() {
	yield getList(
		'/api/update-author-list.json',
		homeActions.createChangeAuthorListAction
	);
}

function* getArticleList() {
	yield getList(
		'/api/article-list.json',
		homeActions.createLoadArticleListAction
	);
}

function* getMoreArticle({ page }) {
	const res = yield axios.get(`/api/more-article-list.json?page=${page}`);
	const list = res.data;
	const action = homeActions.createLoadMoreArticleAction(list, page);
	yield put(action);
}

function* homeSaga() {
	yield takeEvery(homeActions.GET_TOPIC_LIST, getTopicList);
	yield takeEvery(homeActions.GET_AUTHOR_LIST, getAuthorList);
	yield takeEvery(homeActions.UPDATE_AUTHOR_LIST, updateAuthorList);
	yield takeEvery(homeActions.GET_ARTICLE_LIST, getArticleList);
	yield takeEvery(homeActions.GET_MORE_ARTICLE, getMoreArticle);
}

export default homeSaga;
