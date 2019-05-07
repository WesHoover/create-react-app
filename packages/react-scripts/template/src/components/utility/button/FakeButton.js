import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FakeButton extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress(e) {
		const key = e.which || e.keyCode || 0;

		if (key === 13) {
			this.props.onClick();
		}
	}
	render() {
		const {
			ariaLabel,
			disabled,
			onClick,
			children
		} = this.props;

		if (disabled) {
			return (
				<span className='tools-fake-button tools-fake-button-disabled'>
					{children}
				</span>
			)
		}

		return (
			<a className='tools-fake-button' 
				role='button'
				tabIndex='0'
				onClick={onClick}
				onKeyPress={this.handleKeyPress}
				aria-label={ariaLabel || ''}>
				{children}
			</a>
		)
	}
}

FakeButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	ariaLabel: PropTypes.string
}

export default FakeButton;