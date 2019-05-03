import React from 'react';
import { Route } from 'react-router-dom';
import SubNav from '../SubNav';
import Product from '../Product';

function Mac(props) {
	return (
		<React.Fragment>
			<div className="subNav">
				{props.macData.map(item => (
					<SubNav item={item} />
				))}{' '}
			</div>
			<h1>Mac Page</h1>
			<Route
				path="/mac/:id"
				render={props => <Product {...props} macData={props.macData} />}
			/>
		</React.Fragment>
	);
}

export default Mac;
