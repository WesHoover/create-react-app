import React from 'react';

const ImageDragHandle = (props) => {
	return (
		<svg className="tools-image-drag-handle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="16" viewBox="0 0 10 16">
			<g className={"tools-image-fill tools-image-fill-" + props.fill}>
				<circle cx="1.5" cy="2" r="1.5"></circle>
				<circle cx="7.5" cy="2" r="1.5"></circle>
				<circle cx="1.5" cy="8" r="1.5"></circle>
				<circle cx="7.5" cy="8" r="1.5"></circle>
				<circle cx="1.5" cy="14" r="1.5"></circle>
				<circle cx="7.5" cy="14" r="1.5"></circle>
			</g>
		</svg>
	)
}

export default ImageDragHandle;