import React, { Fragment } from 'react';
import Carousel from './homeComponents/Carousel';
import ArticleList from './homeComponents/ArticleList';
import Topic from './homeComponents/Topic';
import Board from './homeComponents/Board';
import Qrbox from './homeComponents/Qrbox';
import Author from './homeComponents/Author';
import SideTool from './homeComponents/SideTool';

const Home = () => {
	return (
		<Fragment>
			<div className="container index">
				<div className="row">
					<div className="col-xs-16 main">
						<Carousel />
						<Topic />
						<ArticleList />
					</div>
					<div className="col-xs-7 col-xs-offset-1 aside">
						<Board />
						<Qrbox />
						<Author />
					</div>
				</div>
			</div>
			<SideTool />
		</Fragment>
	);
};

export default Home;
