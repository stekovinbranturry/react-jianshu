import * as homeActions from './homeActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: []
});

const changeTopicList = (state, action) => {
	return state.set('topicList', action.list);
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case homeActions.CHANGE_TOPIC_LIST:
			return changeTopicList(state, action);
		default:
			return state;
	}
};
