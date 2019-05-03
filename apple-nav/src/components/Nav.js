import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Product from './Product';
import Mac from './products/Mac';
import Iphone from './products/Iphone';
import Ipad from './products/Ipad';
import Watch from './products/Watch';
import TV from './products/TV';
import Music from './products/Music';
import Support from './products/Support';
import {
	macData,
	iphoneData,
	ipadData,
	watchData,
	tvData,
	musicData,
	supportData,
} from './menuData';

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
				<NavLink to="/">
					<img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg" />
				</NavLink>
				<NavLink to="/">
					<img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg" />
				</NavLink>
			</div>
			<Route
				path="/mac"
				render={props => <Mac {...props} macData={macData} />}
			/>
			<Route
				path="/ipad"
				render={props => <Ipad {...props} ipadData={ipadData} />}
			/>
			<Route
				path="/iphone"
				render={props => <Iphone {...props} iphoneData={iphoneData} />}
			/>
			<Route
				path="/watch"
				render={props => <Watch {...props} watchData={watchData} />}
			/>
			<Route
				path="/tv"
				render={props => <TV {...props} tvData={tvData} />}
			/>
			<Route
				path="/music"
				render={props => <Music {...props} musicData={musicData} />}
			/>
			<Route path="/support" render={props => <Support {...props} />} />

			{/* Product Specific */}
			<Route
				path="/mac/:itemId"
				render={props => <Product {...props} macData={macData} />}
			/>
		</React.Fragment>
	);
}

export default Nav;
