import React, { Component } from 'react';

class TableHeader extends Component {
	render() {
			return (
				<div className='table-header'>
					{this.props.children}
				</div>
			);
		
	}
}

export default TableHeader;