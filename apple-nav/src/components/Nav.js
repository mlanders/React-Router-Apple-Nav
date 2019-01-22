import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Mac from './products/Mac';
import Iphone from './products/Iphone';
import Ipad from './products/Ipad';
import Watch from './products/Watch';
import TV from './products/TV';
import Music from './products/Music';
import Support from './products/Support';

function Nav() {
	return (
		<React.Fragment>
			<div className="nav">
				<NavLink to="/">
					<i class="fab fa-apple" />
				</NavLink>
				<NavLink exact to="/mac">
					Mac
				</NavLink>
				<NavLink to="/ipad">iPad</NavLink>
				<NavLink to="/iphone">iPhone</NavLink>
				<NavLink to="/watch">Watch</NavLink>
				<NavLink to="/tv">TV</NavLink>
				<NavLink to="/music">Music</NavLink>
				<NavLink to="/support">Support</NavLink>
			</div>
			<Route path="/mac" render={props => <Mac {...props} />} />
			<Route path="/ipad" render={props => <Ipad {...props} />} />
			<Route path="/iphone" render={props => <Iphone {...props} />} />
			<Route path="/watch" render={props => <Watch {...props} />} />
			<Route path="/tv" render={props => <TV {...props} />} />
			<Route path="/music" render={props => <Music {...props} />} />
			<Route path="/support" render={props => <Support {...props} />} />
		</React.Fragment>
	);
}

export default Nav;
