import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; 

class TransitionSlideLeft extends Component {
	render() {
		const {
			isDrawerOpen,
			children,
			transitionTime
		} = this.props;

		return (
			<ReactCSSTransitionGroup transitionName={'transition-slide-left'}
				transitionEnterTimeout={transitionTime}
				transitionLeaveTimeout={transitionTime}>
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

TransitionSlideLeft.defaultProps = {
	transitionTime: 500
}

TransitionSlideLeft.propTypes = {
	children: PropTypes.object,
	isDrawerOpen: PropTypes.bool,
	transitionTime: PropTypes.number.isRequired
}

export default TransitionSlideLeft;