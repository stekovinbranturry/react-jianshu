import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Router>
				<Route exact path="/" render={Home} />
			</Router>
			<Footer />
		</Provider>
	);
};

export default App;
