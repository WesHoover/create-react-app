import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ribbon extends Component {
	render() {
		const {
			ribbonPosition
		} = this.props;
		
		return (
			<div className={'ribbon' + (ribbonPosition.over <= 0 || ribbonPosition.under <= 0 ? ' ribbon-collapse' : '')} 
				style={{
					top: !ribbonPosition.top ?
							-3
						: ribbonPosition.over <= 0 ? 
							ribbonPosition.max 
						: ribbonPosition.under <= 0 ?
							ribbonPosition.min
						:
						ribbonPosition.top, 
					height: ribbonPosition.height
				}}>
				<div className='ribbon-container' style={{
						top: ribbonPosition.over <= 0 ? 
								Math.max(ribbonPosition.height * -1, ribbonPosition.over) 
							: ribbonPosition.under <= 0 ?
								Math.min(ribbonPosition.height, Math.abs(ribbonPosition.under))
							:
								0
					}}>
					<div className='ribbon-shadow'>
					</div>
					<div className='ribbon-overhang'>
					</div>
				</div>
			</div>
		)
	}
}

Ribbon.propTypes = {
	ribbonPosition: PropTypes.shape({
		top: PropTypes.number.isRequired,
		width: PropTypes.number
	})
}

export default Ribbon;