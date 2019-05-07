import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrackedScroll extends Component {
	constructor(props) {
		super(props);

		this.trackScroll = this.trackScroll.bind(this);
		this.setRef = this.setRef.bind(this);
	}
	setRef(id, ref) {
		this[id] = ref;

		if (this.props.setRef) {
			this.props.setRef(id, ref);
		}
	}
	trackScroll(e) {
		let activeSectionIndex = this.props.activeSectionIndex;
		const viewportHeight = e.target.offsetHeight;
		const parent = this.scrollContainer.getBoundingClientRect();
		const viewportTop = e.target.scrollTop;
		const viewportBottom = viewportTop + viewportHeight;
		let elTop;
		let el;

		if (viewportBottom === e.target.scrollHeight) {
			activeSectionIndex = React.Children.count(this.props.children) - 1;
		} else {
			React.Children.forEach(this.props.children, (section, i) => {
				el = this['section_' + i].getBoundingClientRect();
				elTop = el.top - parent.top;

				if (elTop < viewportHeight * 0.25) {
					activeSectionIndex = i;
				} 
			})
		}

		if (activeSectionIndex !== this.props.activeSectionIndex) {
			this.props.onUpdateActiveSectionIndex(activeSectionIndex);
		}

		if (this.props.onScroll) {
			this.props.onScroll();
		}
	}
	render() {
		const {
			children,
			className,
			overlayEnabled,
		} = this.props;

		return (
			<div className={'tracked-scroll ' + (className || '')} onScroll={this.trackScroll} ref={this.setRef.bind(this, 'scrollContainer')}>
				<div className='tracked-scroll-inner-container'>
					{overlayEnabled && <div className='tracked-scroll-overlay'></div>}
					{React.Children.map(children, (child, i) => {
						return (
							<div className='tracked-scroll-section' ref={this.setRef.bind(this, 'section_' + i)}>
								{child}
							</div>
						)
					})}
				</div>
			</div> 
		)
	}
}

TrackedScroll.propTypes = {
	children: PropTypes.array.isRequired,
	activeSectionIndex: PropTypes.number.isRequired,
	onUpdateActiveSectionIndex: PropTypes.func.isRequired,
	className: PropTypes.string,
	onScroll: PropTypes.func,
	setRef: PropTypes.func,
	overlayEnabled: PropTypes.bool
}

TrackedScroll.defaultProps = {
	overlayEnabled: false,
}

export default TrackedScroll;