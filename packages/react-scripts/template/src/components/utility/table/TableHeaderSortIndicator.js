import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageArrow from 'utility/images/ImageArrow';

class TableHeaderSortIndicator extends Component {
	render() {
			return (
				<div className='table-header-sort-indicator'>
					<div className='table-header-sort-indicator-arrow' data-active={this.props.isAscending}>
						<ImageArrow />
					</div>
					<div className='table-header-sort-indicator-arrow' data-active={this.props.isDescending}>
						<ImageArrow />
					</div>
				</div>
			);
		
	}
}

TableHeaderSortIndicator.propTypes = {
	isAscending: PropTypes.bool.isRequired,
	isDescending: PropTypes.bool.isRequired
}

export default TableHeaderSortIndicator;