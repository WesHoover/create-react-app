import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LazyLoad extends Component {
	constructor(props) {
		super(props);

		this.state = {
			start: 0,
			end: Math.min(props.children.length, 50)
		}

		this.onScroll = this.onScroll.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.children.length !== this.props.children.length) {
			this.setState({
				start: 0,
				end: Math.min(nextProps.children.length, 50)
			})
		}
	}
	onScroll(e) {
		const {
			children,
			itemHeight,
			numberToDisplay
		} = this.props;
		const top = e.target.scrollTop;
		const height = e.target.offsetHeight;
		const bottom = top + height;
		const scrollHeight = e.target.scrollHeight;
		let start = -1;
		let end = -1;

		if (top < itemHeight) {
			start = 0;
			end = Math.min(numberToDisplay, children.length);
		} else if (Math.abs(bottom - scrollHeight) < itemHeight) {
			end = children.length;
			start = Math.max(0, children.length - numberToDisplay);
		} else if (itemHeight * this.state.end < bottom) {
			end = Math.min(children.length, this.state.end + numberToDisplay);
			start = Math.max(0, end - (numberToDisplay * 1.5));
		} else if (this.state.start * itemHeight > top) {
			start = Math.max(this.state.start - numberToDisplay, 0);
			end = Math.min(start + (numberToDisplay * 1.5), children.length);
		}

		if (start > -1 && end > -1) {
			if (start !== this.state.start || end !== this.state.end) {
				this.setState({
					end: end,
					start: start
				})
			}
		}
	}
	render() {
		const {
			start,
			end
		} = this.state; 

		return (
			<div className='lazy-load' onScroll={this.onScroll}>
				<ul>
					<li className='lazy-load-placeholder' style={{height: this.props.itemHeight * start}}>
					</li>
					{this.props.children.map((child, i) => {
						if (i >= start && i < end) {
							return child;
						}
						return null
					})}
					<li className='lazy-load-placeholder' style={{height: this.props.itemHeight * (this.props.children.length - end)}}>
					</li>
				</ul>
			</div>
		)
	}
}

LazyLoad.defaultProps = {
	itemHeight: 56,
	numberToDisplay: 40
}

// expects children to be <li> elements
LazyLoad.propTypes = {
	itemHeight: PropTypes.number.isRequired,
	numberToDisplay: PropTypes.number.isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default LazyLoad;