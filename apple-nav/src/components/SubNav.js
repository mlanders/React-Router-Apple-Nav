import React from 'react';
import { NavLink } from 'react-router-dom';

function SubNav(props) {
	return (
		<NavLink to="/mac">
			<img src={props.item.img} alt={props.item.name} />
			{props.item.name}
		</NavLink>
	);
}

export default SubNav;
