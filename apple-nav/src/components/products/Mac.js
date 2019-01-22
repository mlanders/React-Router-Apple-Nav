import React from 'react';
import SubNav from '../SubNav';

function Mac(props) {
	return (
		<React.Fragment>
			<div className="subNav">
				{props.macData.map(item => (
					<SubNav item={item} />
				))}{' '}
			</div>

			<h1>Mac Page</h1>
		</React.Fragment>
	);
}

export default Mac;
