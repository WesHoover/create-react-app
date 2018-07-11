import React, { Component } from 'react';
import './app.css';

import Header from './components/header/Header';
import GridDemo from './components/vendor/grid/gridDemo';

class App extends Component {
	render() {
		return (
			<div className='app'>	
				<Header />
				<div className='main'>
				<GridDemo />
				</div>				
			</div>
		);
	}
}

export default App;