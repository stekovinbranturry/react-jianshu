import * as headerActions from './headerActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	menuClassName: 'collapse navbar-collapse'
});

let isMenuShow = false;

const toggleMenu = state => {
	if (isMenuShow) {
		isMenuShow = false;
		return state.set('menuClassName', 'collapse navbar-collapse');
	} else {
		isMenuShow = true;
		return state.set('menuClassName', 'collapse navbar-collapse in');
	}
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case headerActions.TOGGLE_MENU:
			return toggleMenu(state);
		default:
			return state;
	}
};
