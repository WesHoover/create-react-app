import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalBackground extends Component {
	constructor(props) {
		super(props);

		this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
	}
	handleKeyPressEnter(e) {
		const key = e.which || e.keyCode || 0;
		if (key === 13) {
			this.props.onClose();
		}
	}
	render() {
		const {
			className,
			onClose
		} = this.props;
		return (
			<a role='button' 
				aria-label='Close dialog'
				tabIndex='0' 
				onClick={onClose} 
				onKeyPress={this.handleKeyPressEnter}
				className={className || 'tools-modal-bg'}>
			</a>
		)
	}
}

ModalBackground.propTypes = {
	onClose: PropTypes.func.isRequired,
	className: PropTypes.string
}

export default ModalBackground;