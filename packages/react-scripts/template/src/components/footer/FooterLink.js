import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterLink extends Component {
	render() {
		return (
			<li className='footer-link'>
				<a href={this.props.url}>
					{this.props.label}
				</a>
			</li>
		)
	}
}

export default FooterLink