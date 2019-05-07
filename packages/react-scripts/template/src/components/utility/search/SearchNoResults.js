import React, { Component } from 'react';

class SearchNoResults extends Component {
	render() {
		return (
			<div className='search-no-results'>
				<h5 className='h5-left-gray'>
					0 search results 
					{this.props.searchTerm ? 
						' for "' + this.props.searchTerm + '"'
						:
						' found'
					}
				</h5>
			</div>
		)
	}
}

export default SearchNoResults;