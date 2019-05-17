import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import SideTool from './components/home/homeComponents/SideTool'
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Route exact path="/" render={Home} />
				<Route exact path="/article" render={Article} />
				<SideTool/>
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
