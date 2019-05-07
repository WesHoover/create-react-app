import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; 

class TransitionToast extends Component {
	render() {
		const {
			isDisplay,
			children
		} = this.props;

		return (
			<ReactCSSTransitionGroup transitionName='tools-transition-toast'
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
					{isDisplay ?
						<span key='content'>
							{children}
						</span>
					:
					null
				}
			</ReactCSSTransitionGroup>
		)
	}
}

TransitionToast.propTypes = {
	children: PropTypes.object,
	isDisplay: PropTypes.bool
}

export default TransitionToast;