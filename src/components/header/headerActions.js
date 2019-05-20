import { fromJS } from 'immutable';
/*
 * action types
 */
export const [TOGGLE_MENU, CHANGE_SEARCH_TIPS, GET_SEARCH_TIPS] = [
	'TOGGLE_MENU',
	'CHANGE_SEARCH_TIPS',
	'GET_SEARCH_TIPS'
];

/*
 * action creaters
 */
export const createToggleMenuAction = () => ({ type: TOGGLE_MENU });

export const createGetSearchTipsAction = () => ({ type: GET_SEARCH_TIPS });

export const createChangeSearchTipsAction = list => ({
	type: CHANGE_SEARCH_TIPS,
	list: fromJS(list)
});
