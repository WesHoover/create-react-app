import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'utility/button/Button';

class ButtonInlineWithMessage extends Component {
	render() {
		const message = this.props.text.split(this.props.buttonMatch);

		return (
			<div className='tools-button-inline-with-message'>
				{message.length > 1 ?
					<span>
						<span className='tools-button-inline-with-message-text'>
							{message[0]}
						</span>
						{message[0].length > 0 ?
							<br/>
							:
							null
						}
						<Button onClick={this.props.onClick} 
							type='inline'
							label={this.props.buttonMatch.trim()} />
						<span className='tools-button-inline-with-message-text'>
							{message[1]}
						</span>
					</span>
					:
					<span className='tools-button-inline-with-message-text'>
						{message}
					</span>
				}
			</div>
		)
	}
}

ButtonInlineWithMessage.propTypes = {
	text: PropTypes.string.isRequired,
	buttonMatch: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default ButtonInlineWithMessage;