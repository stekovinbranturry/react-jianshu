import * as headerActions from './headerActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	menuClassName: 'collapse navbar-collapse',
	searchTipsList: []
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

const changeSearchTips = (state, action) => {
	return state.set('searchTipsList', action.list);
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case headerActions.TOGGLE_MENU:
			return toggleMenu(state);
		case headerActions.CHANGE_SEARCH_TIPS:
			return changeSearchTips(state, action);
		default:
			return state;
	}
};
