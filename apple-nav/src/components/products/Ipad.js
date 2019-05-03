import React from 'react';
import SubNav from '../SubNav';

function Ipad(props) {
	return (
		<React.Fragment>
			<div className="subNav">
				{props.ipadData.map(item => (
					<SubNav item={item} />
				))}
			</div>
			<h1>iPad Page</h1>
		</React.Fragment>
	);
}

export default Ipad;
