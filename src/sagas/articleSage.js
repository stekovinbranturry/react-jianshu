import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as articleActions from '../components/article/articleActions';

function* getArticle({ id }) {
	const res = yield axios.get(`/data/article-${id}.json`);
	const data = res.data;
	const action = articleActions.createRenderArticleAction(data);
	yield put(action);
}

function* articleSaga() {
	yield takeEvery(articleActions.GET_ARTICLE, getArticle);
}

export default articleSaga;
