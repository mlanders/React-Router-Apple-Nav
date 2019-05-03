import React from 'react';
import SubNav from '../SubNav';

function Iphone(props) {
	return (
		<React.Fragment>
			<div className="subNav darkMode">
				{props.iphoneData.map(item => (
					<SubNav item={item} />
				))}
			</div>
			<h1>iPhone Page</h1>
		</React.Fragment>
	);
}

export default Iphone;
