import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FooterLink from './FooterLink.js';

class Footer extends Component {
	render() {
		return (
			<footer className='footer container'>
				<div className='footer-content grid-4 grid_sm-1'>
					<div className='col'>
						<ul>
							<FooterLink url='#'
								label='Prospectuses' />
							<FooterLink url='#'
								label='Analytic Hub' />
							<FooterLink url='#'
								label='Order Hard Copies' />
						</ul>
					</div>
					<div className='col'>
						<ul>
							<FooterLink url='#'
								label='Help' />
							<FooterLink url='#'
								label='Contact' />
						</ul>
					</div>
					<div className='col'>
						<ul>
							<FooterLink url='#'
								label='Dimensional.com' />
							<FooterLink url='#'
								label='Fama and French Forum Blog' />
						</ul>
					</div>
					<div className='col'>
						<ul>
							<FooterLink url='#'
								label='Legal Notices' />
							<FooterLink url='#'
								label='Privacy' />
						</ul>
						<span className='body-4-left-white'>
							&copy; 2018 Dimensional Fund Advisors
						</span>
					</div>
				</div>
				<hr />
			</footer>
		)
	}
}

export default Footer;