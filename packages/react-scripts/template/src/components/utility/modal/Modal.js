import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'utility/button/Button';
import TransitionModal from 'utility/transitions/TransitionModal';
import ModalBackground from 'utility/modal/ModalBackground';

class Modal extends Component {
	render() {
		const {
			handleSecondaryAction, 
			handlePrimaryAction,
			handleClose,
			isVisible,
			header,
			children,
			secondaryLabel,
			primaryLabel,
			className,
		} = this.props;

		return (
			<TransitionModal isVisible={isVisible}>
				<div className={`modal ${className}`}>
					<ModalBackground onClose={handleClose} />
					<div className='modal-content'>
						<Button onClick={handleClose} 
							type='icon'
							icon='close' 
							ariaLabel='Close dialog'/>
						<h4 className='h4-left-dark'>
							{header}
						</h4>
						<div className='modal-content-body'>
							{children}
						</div>
						<div className='modal-actions'>
							{handleSecondaryAction &&
								<Button type='secondary'
								label={secondaryLabel}
								onClick={handleSecondaryAction} />
							}
							<Button type='primary'
								label={primaryLabel}
								onClick={handlePrimaryAction} />
						</div>
					</div>
				</div>
			</TransitionModal>
		)
	}
}

Modal.defaultProps = {
	secondaryLabel: "Don't Save",
	primaryLabel: "Save",
	className: ""
}

Modal.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	header: PropTypes.string,
	children: PropTypes.object,
	handlePrimaryAction: PropTypes.func.isRequired,
	handleSecondaryAction: PropTypes.func,
	handleClose: PropTypes.func.isRequired,
	secondaryLabel: PropTypes.string.isRequired,
	primaryLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default Modal;