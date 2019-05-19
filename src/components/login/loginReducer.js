import * as loginActions from './loginActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	username: '',
	password: '',
	isLogin: false
});

const changeUsername = (state, action) => {
	return state.set('username', action.username);
};

const changePassword = (state, action) => {
	return state.set('password', action.password);
};

const signIn = (state, action) => {
	return action.user.get(state.get('username')) === state.get('password')
		? state.set('isLogin', true)
		: state.set('isLogin', false);
};

const signOut = state => {
	return state.merge({
		username: '',
		password: '',
		isLogin: false
	});
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case loginActions.CHANGE_USERNAME:
			return changeUsername(state, action);
		case loginActions.CHANGE_PASSWORD:
			return changePassword(state, action);
		case loginActions.SIGN_IN:
			return signIn(state, action);
		case loginActions.SIGN_OUT:
			return signOut(state);
		default:
			return state;
	}
};
