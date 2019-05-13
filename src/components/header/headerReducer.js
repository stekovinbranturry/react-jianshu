import * as headerActions from './headerActions';

const defaultState = {
	isMenuShow: false,
	menuClassName: 'collapse navbar-collapse'
};

const toggleMenu = state => {
	const newState = { ...state };
	if (newState.isMenuShow) {
		newState.menuClassName = 'collapse navbar-collapse';
		newState.isMenuShow = false;
	} else {
		newState.menuClassName = 'collapse navbar-collapse in';
		newState.isMenuShow = true;
	}
	return newState;
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case headerActions.TOGGLE_MENU:
			return toggleMenu(state, action);

		default:
			return state;
	}
};
