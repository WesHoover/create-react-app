import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageSearch from 'utility/images/ImageSearch';
import Button from 'utility/button/Button';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: props.initialValue || '',
			isFocused: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.clear = this.clear.bind(this);
		this.focus = this.focus.bind(this);
		this.onFocus = () => this.setState({ isFocused: true });
		this.onBlur = () => this.setState({ isFocused: false });
	}
	handleChange(e) {
		const val = e.target.value;

		this.setState({
			input: val
		})

		this.props.handleSearch(val);
	}
	clear() {
		this.setState({
			input: ''
		})
		this.focus();
		this.props.handleSearch('');
	}
	focus() {
		this.textInput.focus();
	}
	render() {
		const {
			input
		} = this.state;
		return (
			<div className='tools-search'>
				<div className='tools-search-content'>
					<ImageSearch />
					<input type='text' value={input} placeholder={this.state.isFocused ? '' : this.props.placeholder || ''} ref={(input) => { this.textInput = input; }} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleChange}/>
					{input.length > 0 &&
						<Button type='inline'
							icon='remove'
							ariaLabel='Clear search'
							onClick={this.clear} />
					}
				</div>
			</div>
		)
	}
}

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	initialValue: PropTypes.string
}

Search.defaultProps = {
	initialValue: null,
}

export default Search;