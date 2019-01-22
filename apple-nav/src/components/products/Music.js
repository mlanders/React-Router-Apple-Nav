import React from 'react';
import SubNav from '../SubNav';

function Music(props) {
	return (
		<React.Fragment>
			<div className="subNav">
				{props.musicData.map(item => (
					<SubNav item={item} />
				))}
			</div>
			<h1>Music Page</h1>
		</React.Fragment>
	);
}

export default Music;
