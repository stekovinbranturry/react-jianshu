import { fromJS } from 'immutable';
export const [
	GET_TOPIC_LIST,
	CHANGE_TOPIC_LIST,
	GET_AUTHOR_LIST,
	CHANGE_AUTHOR_LIST,
	GET_ARTICLE_LIST,
	LOAD_ARTICLE_LIST,
	GET_MORE_ARTICLE,
	LOAD_MORE_ARTICLE,
	SHOW_SIDETOOL,
	HIDE_SIDETOOL
] = [
	'GET_TOPIC_LIST',
	'CHANGE_TOPIC_LIST',
	'GET_AUTHOR_LIST',
	'CHANGE_AUTHOR_LIST',
	'GET_ARTICLE_LIST',
	'LOAD_ARTICLE_LIST',
	'GET_MORE_ARTICLE',
	'LOAD_MORE_ARTICLE',
	'SHOW_SIDETOOL'
];

export const createGetTopicListAction = () => ({
	type: GET_TOPIC_LIST
});

export const createChangeTopicListAction = list => ({
	type: CHANGE_TOPIC_LIST,
	list: fromJS(list)
});

export const createGetAuthorListAction = () => ({
	type: GET_AUTHOR_LIST
});

export const createChangeAuthorListAction = list => ({
	type: CHANGE_AUTHOR_LIST,
	list: fromJS(list)
});

export const createGetArticleListAction = () => ({
	type: GET_ARTICLE_LIST
});

export const createLoadArticleListAction = list => ({
	type: LOAD_ARTICLE_LIST,
	list: fromJS(list)
});

export const createGetMoreArticleAction = page => ({
	type: GET_MORE_ARTICLE,
	page
});

export const createLoadMoreArticleAction = (list, page) => ({
	type: LOAD_MORE_ARTICLE,
	list: fromJS(list),
	page
});

export const createShowSidetoolAction = value => ({
	type: SHOW_SIDETOOL,
	value
});
