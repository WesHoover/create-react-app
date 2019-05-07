import React from 'react';

const ImageArrowWithTail = () => {
	return (
		<svg className="tools-image-arrow-tail" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30" height="24" viewBox="0 0 24 24">
			<g transform="rotate(180 8 12)">	
				<path className='tools-image-fill' d="M7.055 19l6.472-6.472L7 6h2.621l6.527 6.528L9.676 19h-2.62z"/>
				<line className='tools-image-stroke' strokeWidth="2" x1="14" y1="12.5" x2="-10" y2="12.5" />
			</g>
		</svg>
	)
}

export default ImageArrowWithTail;