import React, { Component } from 'react';
// import * as moment from 'moment';
// import * as d3 from 'd3';
import './app.css';
import GridDemo from './components/vendor/grid/gridDemo';

class App extends Component {
	render() {
	return (
		<div className="app">
			<GridDemo />
		</div>
	);
	}
}

export default App;