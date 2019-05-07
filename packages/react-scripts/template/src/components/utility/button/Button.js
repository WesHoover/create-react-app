import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageExpand from 'utility/images/ImageExpand';
import ImageX from 'utility/images/ImageX';
import ImageArrow from 'utility/images/ImageArrow';
import ImageCopy from 'utility/images/ImageCopy';
import ImageIncomplete from 'utility/images/ImageIncomplete';
import ImageDownload from 'utility/images/ImageDownload';
import ImageStar from 'utility/images/ImageStar';

class Button extends Component { 
	constructor(props) {
		super(props);

		this.getIcon = this.getIcon.bind(this);
		this.getClasses = this.getClasses.bind(this);
	}
	getIcon() {
		switch(this.props.icon) {
			case 'expand':
				return <ImageExpand />;
			case 'close':
			case 'remove':
				return <ImageX />;
			case 'toggle':
				return <ImageArrow />;
			case 'copy':
				return <ImageCopy />;
			case 'incomplete':
				return <ImageIncomplete />;
			case 'download':
				return <ImageDownload />;
			case 'favorite':
				return <ImageStar />;
			default:
				return null;
		}
	}
	getClasses() {
		const {
			type,
			icon,
			progressPercentage,
			isToggleOpen
		} = this.props;
		let classes = 'tools-button tools-button-' + type;

		if (icon === 'toggle') {
			classes += ' tools-button-toggle';
			if (isToggleOpen) {
				classes += ' tools-button-toggle-open';  
			}
		}

		if (icon === 'favorite') {
			classes += ' tools-button-favorite';
			if(isToggleOpen) {
				classes += ' tools-button-favorite-selected';
			}
		}

		if (icon) {
			classes += ' tools-button-' + icon;
		}

		if(progressPercentage !== null) {
			classes += ' tools-button-with-progress-bar';
		}

		return classes;
	}
	render() {
		const {
			onClick,
			label,
			isDisabled,
			ariaLabel,
			progressPercentage,
			type
		} = this.props;

		return (
			<button type='button' 
				onClick={onClick} 
				aria-label={ariaLabel || label}
				className={this.getClasses()}
				disabled={isDisabled}>
				{type === 'link-back' && 
					<ImageArrow /> 
				}
				<span>
					{label}
				</span>
				{ progressPercentage !== null &&
					<div className='tools-button-progress-bar'
						style={{
							width: `${progressPercentage}%`
						}}></div>
				}
				{this.getIcon()}
			</button>
		)
	}
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	icon: PropTypes.string,
	isToggleOpen: PropTypes.bool,
	ariaLabel: PropTypes.string,
}

Button.defaultProps = {
	progressPercentage: null,
}

export default Button;