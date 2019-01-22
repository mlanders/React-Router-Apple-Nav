import React from 'react';
import SubNav from '../SubNav';

function Watch(props) {
	return (
		<React.Fragment>
			<div className="subNav">
				{props.watchData.map(item => (
					<SubNav item={item} />
				))}
			</div>
			<h1>Watch Page</h1>
		</React.Fragment>
	);
}

export default Watch;
