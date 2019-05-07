import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TooltipInline extends Component {
	render() {
		return (
			<div className="tooltip-inline">
				<div className='tooltip-inline-body'>
					{this.props.body}
				</div>
				<svg>
					<polygon points="0 -1 24 -1 12 10"></polygon>
				</svg>
			</div>
		);
	}
}

TooltipInline.propTypes = {
	body: PropTypes.string
}

export default TooltipInline;