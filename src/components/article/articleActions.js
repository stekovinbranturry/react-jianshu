import { fromJS } from 'immutable';

export const [GET_ARTICLE, RENDER_ARTICLE] = ['GET_ARTICLE', 'RENDER_ARTICLE'];

export const createGetArticleAction = id => ({
	type: GET_ARTICLE,
	id
});

export const createRenderArticleAction = data => ({
	type: RENDER_ARTICLE,
	data: fromJS(data)
});
