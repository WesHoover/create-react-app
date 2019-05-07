import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageCheck from 'utility/images/ImageCheck';
import ImageBox from 'utility/images/ImageBox';

class FormCheckbox extends Component {
	render() {
		const {
			label,
			id,
			onToggleCheckbox,
			checked,
			disabled
		} = this.props;
		return (
			<div className={'form-checkbox'
				+ (disabled && !checked ? ' form-checkbox-disabled' : '')}>
				<input type='checkbox' id={id} checked={checked} disabled={disabled && !checked} onChange={onToggleCheckbox}/>
				<label htmlFor={id}>
					{label ?
						<div className='form-checkbox-label'>
							{label}
						</div>
						:
						null
					} 
					{checked ?
						<ImageCheck /> 
						:
						<ImageBox />
					}
				</label>
			</div>
		)
	}
}

FormCheckbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string,
	id: PropTypes.string.isRequired,
	onToggleCheckbox: PropTypes.func.isRequired,
	disabled: PropTypes.bool
}

export default FormCheckbox;