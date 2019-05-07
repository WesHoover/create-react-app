import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormFieldCharCount extends Component {
	render() {
		return (
			<span className='tools-form-field-char-count'>
				{this.props.count}/{this.props.charLimit}
			</span>
		)
	}
}

FormFieldCharCount.propTypes = {
	count: PropTypes.number.isRequired,
	charLimit: PropTypes.number.isRequired
}

export default FormFieldCharCount;