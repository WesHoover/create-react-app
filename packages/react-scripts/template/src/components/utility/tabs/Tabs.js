import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'utility/button/Button';
import FakeButton from 'utility/button/FakeButton';

class Tabs extends Component {
	render() {
		const {
			tabs,
			activeTabId,
			labelKey,
			idKey,
			children,
			onCloseTab,
			onFocusTab,
			onCopy,
			isCopyDisabled
		} = this.props;
		return (
			<div className='tabs'>
				<ul>
					{tabs.map((tab, i) => {
						return (
							<li key={tab[idKey]} className={'tabs-item tabs-item' + (tab[idKey] === activeTabId ? '-active' : '-inactive')}>
								<FakeButton	onClick={onFocusTab.bind(this, tab[idKey], i)}
									aria-label={'Focus ' + tab[labelKey]}>
									<div className='tabs-item-label'>
										{tab[labelKey]}
									</div>
								</FakeButton>
								{onCloseTab ?
									<Button onClick={onCloseTab.bind(this, tab[idKey])} 
										type='icon'
										icon='close'
										ariaLabel={'Close ' + tab[labelKey]} />
									:
									null
								}
								{onCopy && tab[idKey] === activeTabId ?
									<Button onClick={onCopy.bind(this, tab[idKey])} 
										type='icon'
										icon='copy'
										isDisabled={isCopyDisabled}
										ariaLabel={'Duplicate ' + tab[labelKey]} />
									:
									null
								}
							</li>
						)
					})}
					{children ?
						<li>
							{children}
						</li>
						: 
						null
					}
				</ul>
			</div>
		)
	}
}

Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	activeTabId: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]).isRequired,
	onFocusTab: PropTypes.func.isRequired,
	labelKey: PropTypes.string,
	idKey: PropTypes.string,
	onCloseTab: PropTypes.func,
	children: PropTypes.object,
	onCopy: PropTypes.func,
	isCopyDisabled: PropTypes.bool
}

Tabs.defaultProps = {
	labelKey: 'label',
	idKey: 'id'
}

export default Tabs;