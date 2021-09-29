import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import "./Footer.css"
class Footer extends Component {
  render() {
    return (
	<div className="main-footer">
		<div className="row">
		<HashRouter>
				{/* Column 1 */}
					<div className="col">
						<h3>Plano Bees</h3>
						<ul className="list-unstyled">
							<li>270-635-7488</li>
							<li>Madisonville, KY</li>
							<li>9299 Glascow Street</li>
						</ul>
					</div>
				{/* Column 2 */}
					<div className="col">
						<h3>Newsletter</h3>
						<ul className="list-unstyled">
						<div className="inputBox">
						<input type="text" id="userEmail" name="userEmail"></input>
						<input type="submit" id="signUpButton" value="Sign up!"></input>
						</div>
						</ul>
					</div>
				{/* Column 3 */}
					<div className="col">
						<h3>Contact Info</h3>
						<ul className="list-unstyled">
							<li>270-635-7488</li>
							<li>Madisonville, KY</li>
							<li>9299 Glascow Street</li>
						</ul>
					</div>
				
				<div className="arr">
					<p className="col-sm">
					<center>
						<NavLink to="/privacy">
						&copy;{new Date().getFullYear()} Plano Bees | All Rights Reserved | Privacy
						</NavLink>
					</center>
					</p>
				</div>
				</HashRouter>
			</div>
		</div>
    );
}
}
 
export default Footer;