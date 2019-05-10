import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
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
