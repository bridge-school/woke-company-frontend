import React, { Component } from 'react';
import logo from './assets/bridge-logo.svg';
import { checkApiServer } from './api';
import Header from './components/Header';

class App extends Component {
	componentDidMount() {
		// checking that we're connected to the backend
		checkApiServer();
	}
	render() {
		return (
			<div className="App pt-24 md:pt-32">
				<Header logo={logo} />
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
