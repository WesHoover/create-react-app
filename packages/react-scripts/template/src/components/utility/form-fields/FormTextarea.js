import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textarea from 'react-textarea-autosize';

import FormField from 'utility/form-fields/FormField';
import FormFieldCharCount from 'utility/form-fields/FormFieldCharCount';

class FormTextarea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEmpty: props.val.length === 0,
			isFocused: false
		}

		this.onChange = this.onChange.bind(this);		
		this.onFocus = () => this.setState({ isFocused: true });
		this.onBlur = this.onBlur.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			isEmpty: nextProps.val.length === 0
		})
	}
	onChange(e) {
		let newVal = e.target.value;

		this.setState({
			isEmpty: newVal.length === 0
		})

		this.props.onChange(newVal, this.props.charLimit);
	}
	onBlur() {
		this.setState({ 
			isFocused: false 
		});

		if (this.props.onBlur) {
			this.props.onBlur();
		}
	}
	render() {
		const {
			label,
			val,
			isRequired,
			charLimit,
			id
		} = this.props;
		return (
			<FormField isEmpty={this.state.isEmpty}
				label={label}
				isFocused={this.state.isFocused} 
				isRequired={isRequired}
				isError={isRequired && this.state.isEmpty && !this.state.isFocused} 
				id={id}>
				<Textarea className='tools-form-textarea' 
					type='text' 
					value={val}
					onChange={this.onChange} 
					onFocus={this.onFocus} 
					onBlur={this.onBlur}
					maxRows={5}
					id={id} />
				{charLimit ?
					<FormFieldCharCount count={val.length}
						charLimit={charLimit} />
					:
					null
				}
			</FormField>
		)
	}
}

FormTextarea.propTypes = {
	label: PropTypes.string,
	isRequired: PropTypes.bool,
	val: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	charLimit: PropTypes.number,
	id: PropTypes.string.isRequired
}

export default FormTextarea;