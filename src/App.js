import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/Footer';
import store from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Footer />
		</Provider>
	);
};

export default App;
