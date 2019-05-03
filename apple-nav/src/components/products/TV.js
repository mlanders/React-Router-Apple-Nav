import React from 'react';
import SubNav from '../SubNav';

function TV(props) {
	return (
		<React.Fragment>
			<div className="subNav darkMode">
				{props.tvData.map(item => (
					<SubNav item={item} />
				))}
			</div>
			<h1>TV Page</h1>
		</React.Fragment>
	);
}

export default TV;
