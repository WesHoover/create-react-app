import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import Button from 'utility/button/Button';

class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpand: true
		}

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			isExpand: !this.state.isExpand
		})
	}
	render() {
		const {
			header,
			children,
			subHeader
		} = this.props;
		return (
			<div className='accordion'>
				<div className='accordion-header'>
					<Button type='icon'
						icon='toggle'
						onClick={this.toggle} 
						isToggleOpen={this.state.isExpand} 
						ariaLabel={'Toggle ' + header}/>
					<span>
						{header}
					</span>
					{subHeader ? 
						<span className='accordion-subheader'>
							{subHeader}
						</span> 
						:
						null
					}
				</div>
				<AnimateHeight height={this.state.isExpand ? 'auto' : 0}
					duration={200}>
					<div className='accordion-children'>
						{children}
					</div>
				</AnimateHeight>
			</div>
		)
	}
}

Accordion.propTypes = {
	children: PropTypes.object.isRequired,
	header: PropTypes.string.isRequired,
	subHeader: PropTypes.string
}

export default Accordion;