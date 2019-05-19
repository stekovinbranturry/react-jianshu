import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as loginAction from '../components/login/loginActions';

function* verifyUser() {
	const res = yield axios.get('/data/user.json');
	const data = res.data;
	const action = loginAction.createSignInAction(data);
	yield put(action);
}

function* loginSage() {
	yield takeEvery(loginAction.VERIFY_USER, verifyUser);
}

export default loginSage;
