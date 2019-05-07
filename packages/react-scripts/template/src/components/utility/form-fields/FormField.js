import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormField extends Component {
	render() {
		const {
			label,
			isEmpty,
			isFocused,
			isRequired,
			isError,
			id
		} = this.props;
		return (
			<div className={'tools-form-field ' 
				+ (!isEmpty ? ' tools-form-field-filled' : '') 
				+ (isFocused ? ' tools-form-field-focused' : '')
				+ (isError ? ' tools-form-field-error' : '')}>
				<label htmlFor={id} >
					{label} 
					{isRequired ?
						isError ?
							' is required'
							:
						' * ' 
						: 
						''
					}
				</label>
				{this.props.children}
			</div>
		)
	}
}

FormField.propTypes = {
	label: PropTypes.string,
	isRequired: PropTypes.bool,
	isError: PropTypes.bool,
	isFocused: PropTypes.bool,
	id: PropTypes.string.isRequired
}

export default FormField;