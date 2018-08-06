import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageLogo from './../utility/images/ImageLogo.js';

class Header extends Component {
	render() {
		return (
			<header className='header container'>
				<div className='header-content grid-12'>
					<div className='col-2 sm-visible'>
					</div>
					<div className='col-9_sm-8'>
						<ImageLogo />
					</div>
					<div className='col-2'>
						
					</div>
					<div className='col-1 sm-hidden'>
						
					</div>
				</div>
				<hr />
			</header>
		)
	}
}

export default Header;