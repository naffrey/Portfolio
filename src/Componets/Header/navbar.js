import React from 'react';
import { Link } from 'react-router-dom'

function navbar(props) {
    return (
			<div>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About Nick</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/resume'>Resume</Link>
				</li>
			</div>
		);
}

export default navbar;