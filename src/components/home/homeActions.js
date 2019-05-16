import { fromJS } from 'immutable';
export const [GET_TOPIC_LIST, CHANGE_TOPIC_LIST] = [
	'GET_TOPIC_LIST',
	'CHANGE_TOPIC_LIST'
];

export const createGetTopicListAction = () => ({
	type: GET_TOPIC_LIST
});

export const createChangeTopicListAction = list => ({
	type: CHANGE_TOPIC_LIST,
	list: fromJS(list)
});
