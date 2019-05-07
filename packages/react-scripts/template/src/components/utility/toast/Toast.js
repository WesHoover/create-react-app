import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'utility/button/Button';
import TransitionToast from 'utility/transitions/TransitionToast';

class Toast extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timerId: -1
		}

		this.setTimer = this.setTimer.bind(this);
		this.clearTimer = this.clearTimer.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if ((nextProps.isDisplay && !this.props.isDisplay) || nextProps.copy !== this.props.copy) {
			this.setTimer();
		}
	}
	componentWillUnmount() {
		this.clearTimer();
	}
	setTimer() {
		this.clearTimer();

		const timerId = setTimeout(() => {
			this.props.onHide();
		}, 3000)

		this.setState({
			timerId: timerId
		})
	}
	clearTimer() {
		clearInterval(this.state.timerId);
	}
	render() {
		const {
			onUndo,
			copy,
			isDisplay
		} = this.props;
		return (
			<TransitionToast isDisplay={isDisplay}>
				<div className='toast' onMouseEnter={this.clearTimer} onMouseLeave={this.setTimer} >
					<div>
						{copy}
					</div>
					{onUndo ?
						<Button onClick={onUndo}
							type='inline'
							label='Undo' />
						:
						null
					}
				</div>
			</TransitionToast>
		)
	}
}

Toast.propTypes = {
	copy: PropTypes.string.isRequired,
	onUndo: PropTypes.func,
	isDisplay: PropTypes.bool,
	onHide: PropTypes.func.isRequired
}

export default Toast;