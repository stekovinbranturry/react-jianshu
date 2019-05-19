import { fromJS } from 'immutable';

export const [
	CHANGE_USERNAME,
	CHANGE_PASSWORD,
	VERIFY_USER,
	SIGN_IN,
	SIGN_OUT
] = [
	'CHANGE_USERNAME',
	'CHANGE_PASSWORD',
	'VERIFY_USER',
	'SIGN_IN',
	'SIGN_OUT'
];

export const createChangeUsernameAction = username => ({
	type: CHANGE_USERNAME,
	username
});

export const createChangePasswordAction = password => ({
	type: CHANGE_PASSWORD,
	password
});

export const createVerifyUserAction = () => ({ type: VERIFY_USER });

export const createSignInAction = user => ({
	type: SIGN_IN,
	user: fromJS(user)
});

export const createSignOutAction = () => ({ type: SIGN_OUT });
