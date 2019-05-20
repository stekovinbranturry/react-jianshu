import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
	loader: () => import('./Article'),
	loading() {
		return <div>Loading...</div>;
	}
});

export default () => <LoadableComponent />;
