import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RibbonFloatingPlaceholder extends Component {
	render() {
		const {
			children,
			ribbonPosition,
			className,
		} = this.props;

		return (
			<div className={`tools-ribbon-floating-placeholder ${className || ''}`} style={{marginTop: ribbonPosition.floatingOffset || '', top: ribbonPosition.lockedTop}}>
				{children}
			</div>
		)
	}
}

RibbonFloatingPlaceholder.propTypes = {
	children: PropTypes.element,
	ribbonPosition: PropTypes.object.isRequired,
	className: PropTypes.string,
}

export default RibbonFloatingPlaceholder;