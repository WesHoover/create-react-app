import React, { Component } from 'react';
// import * as moment from 'moment';
// import * as d3 from 'd3';
import './app.css';
import GridDemo from 'vendor/grid/gridDemo';
import ImageLogo from 'utility/images/ImageLogo';

class App extends Component {
	render() {
	return (
		<div className="app">
			<ImageLogo />
			<GridDemo />
		</div>
	);
	}
}

export default App;