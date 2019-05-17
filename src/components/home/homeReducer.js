import * as homeActions from './homeActions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	authorList: [],
	articleList: [],
	articleListPage: 1,
	ifShowSidetool: false
});

const changeTopicList = (state, action) => {
	return state.set('topicList', action.list);
};

const changeAuthorList = (state, action) => {
	return state.set('authorList', action.list);
};

const loadArticleList = (state, action) => {
	return state.set('articleList', action.list);
};

const loadMoreArticle = (state, action) => {
	return state.merge({
		articleList: [...state.get('articleList'), ...action.list],
		articleListPage: action.page + 1
	});
};

const showSidetool = (state, action) => {
	return state.set('ifShowSidetool', action.value);
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case homeActions.CHANGE_TOPIC_LIST:
			return changeTopicList(state, action);
		case homeActions.CHANGE_AUTHOR_LIST:
			return changeAuthorList(state, action);
		case homeActions.LOAD_ARTICLE_LIST:
			return loadArticleList(state, action);
		case homeActions.LOAD_MORE_ARTICLE:
			return loadMoreArticle(state, action);
		case homeActions.SHOW_SIDETOOL:
			return showSidetool(state, action);
		default:
			return state;
	}
};
