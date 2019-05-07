import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import FormField from 'utility/form-fields/FormField';
import ImageArrow from 'utility/images/ImageArrow';

class FormDropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuOpen: false
		}

		this.onMenuOpen = () => this.setState({ isMenuOpen: true });
		this.onMenuClose = () => this.setState({ isMenuOpen: false });
	}
	render() {
		const {
			label,
			val,
			id,
			options,
			onChange
		} = this.props;

		return (
			<FormField label={label}
				isRequired={false}
				isError={false} 
				id={id}>
				<span className={'tools-react-select-arrow' + (this.state.isMenuOpen ? '-open' : '-closed')}>
					<ImageArrow />
				</span>
				<Select value={val}
					onChange={onChange}
					options={options} 
					placeholder='Untagged' 
					className='tools-react-select'
					classNamePrefix='tools-dropdown' 
					onMenuOpen={this.onMenuOpen}
					onMenuClose={this.onMenuClose}
					isSearchable={false}
					openMenuOnFocus={true} />
			</FormField>
		)
	}
}

FormDropdown.propTypes = {
	label: PropTypes.string,
	val: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		label: PropTypes.string
	})).isRequired
}

export default FormDropdown;