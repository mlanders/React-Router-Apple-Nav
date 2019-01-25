import React from 'react';

function Product(props) {
	const item = props.macData.find(
		item => `${item.id}` === props.match.params.id
	);

	return <h1>{item.name}</h1>;
}

export default Product;
