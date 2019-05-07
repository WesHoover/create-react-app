import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TooltipOnboarding extends Component {
	render() {
		const {
			title, 
			body
		} = this.props;
		return (
			<div className="tools-tooltip-onboarding">
				<h4 className='tools-h4-left-dark'>
					{title}
				</h4>
				{body && 
					<p className='tools-body-3-left-dark'>
						{body}
					</p>
				}
			</div>
		);
	}
}

TooltipOnboarding.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
}

export default TooltipOnboarding;