import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Article from './components/article/loadable';
import Footer from './components/footer/Footer';
import SideTool from './components/home/homeComponents/SideTool';
import Login from './components/login/Login';
import Writer from './components/writer/loadable';
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/article/:id" component={Article} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/writer" component={Writer} />
				<SideTool />
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
