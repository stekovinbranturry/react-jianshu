import React, { Fragment } from 'react';
import Carousel from './homeComponents/Carousel';
import ArticleList from './homeComponents/ArticleList';
import Board from './homeComponents/Board';
import Qrbox from './homeComponents/Qrbox';
import Author from './homeComponents/Author';

const Home = () => {
	return (
		<Fragment>
			<Carousel />
			<ArticleList />
			<Board />
			<Qrbox />
			<Author />
		</Fragment>
	);
};

export default Home;
