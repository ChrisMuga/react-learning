import React from "react"
import { NavLink, Link } from "react-router-dom"
function Navbar(props) {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
				<Link to="/" className="navbar-brand">
					Navbar
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item active">
							<Link to="/" className="nav-link">
								Home <span class="sr-only">(current)</span>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/users" className="nav-link">
								Users
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
