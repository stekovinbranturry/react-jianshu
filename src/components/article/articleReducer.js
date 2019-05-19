import * as articleActions from './articleActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	articleDetails: {}
});

const renderArticle = (state, action) => {
	return state.set('articleDetails', action.data);
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case articleActions.RENDER_ARTICLE:
			return renderArticle(state, action);
		default:
			return state;
	}
};
