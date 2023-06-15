import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="menubar">
			<div className="menubar-content">
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-3">
								<div className="site-title">
									<a href="/#home" style={{ textDecoration: "none" }}>
										<h3>Crime Analysis</h3>
									</a>
								</div>
							</div>
							<div className="navbar-header">
								<button
									type="button"
									className="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1"
									aria-expanded="false"
								>
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div className="col-md-9 col-sm-9 navbar-style">
								<div
									className="collapse navbar-collapse"
									id="bs-example-navbar-collapse-1"
								>
									<ul className="nav navbar-nav">
										<li>
											<a href="/#home" className="active">
												Home
											</a>
										</li>
										<li>
											<a href="/#about">About</a>
										</li>
										<li>
											<Link to="/mapping">Statistics</Link>
										</li>
										<li>
											<Link to="/prediction">Prediction</Link>
										</li>
										<li>
											<a href="/#service">Services</a>
										</li>

										<li>
											<a href="/#contact">Contact</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;