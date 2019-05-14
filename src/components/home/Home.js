import React, { Fragment } from 'react';
import Carousel from './homeComponents/Carousel';
import ArticleList from './homeComponents/ArticleList';
import Topic from './homeComponents/Topic';
import Board from './homeComponents/Board';
import Qrbox from './homeComponents/Qrbox';
import Author from './homeComponents/Author';

const Home = () => {
	return (
		<Fragment>
			<div class="container index">
				<div class="row">
					<div class="col-xs-16 main">
						<Carousel />
						<Topic />
						<ArticleList />
					</div>
					<div class="col-xs-7 col-xs-offset-1 aside">
						<Board />
						<Qrbox />
						<Author />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
