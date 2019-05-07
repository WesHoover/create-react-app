import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; 


class TransitionModal extends Component {
	render() {
		const {
			isVisible,
			children
		} = this.props;

		return (
			<ReactCSSTransitionGroup transitionName='tools-transition-modal'
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
					{isVisible ?
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

TransitionModal.propTypes = {
	children: PropTypes.object,
	isVisible: PropTypes.bool
}

export default TransitionModal;