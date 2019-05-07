import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; 

class TransitionSlideDown extends Component {
	render() {
		const {
			isDrawerOpen,
			children
		} = this.props;

		return (
			<ReactCSSTransitionGroup transitionName='transition-slide-down'
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}>
					{isDrawerOpen ?
						<span key='drawer'>
							{children}
						</span>
					:
					null
				}
			</ReactCSSTransitionGroup>
		)
	}
}

TransitionSlideDown.propTypes = {
	children: PropTypes.object,
	isDrawerOpen: PropTypes.bool
}

export default TransitionSlideDown;