import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RibbonPlaceholder extends Component {
	render() {
		const {
			setStickyPositionRef,
			children
		} = this.props;

		return (
			<div className='tools-ribbon-placeholder' ref={setStickyPositionRef}>
				{children}
			</div>
		)
	}
}

RibbonPlaceholder.propTypes = {
	children: PropTypes.element,
	setStickyPositionRef: PropTypes.func.isRequired
}

export default RibbonPlaceholder;