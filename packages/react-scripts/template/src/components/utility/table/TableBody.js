import React, { Component } from 'react';

class TableBody extends Component {
	render() {
		return (
			<div className='table-body'>
				<div className='grid'>
					<div className='col table-body-content'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default TableBody;