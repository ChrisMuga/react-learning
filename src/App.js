import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Index from "./pages/Index"
import UsersPage from "./pages/UsersPage"
import Navbar from "./components/Navbar"

function App() {
	return (
		<Router>
			<div className="container-fluid mt-3">
				<Navbar />
			</div>
			<Route path="/users" component={UsersPage} />
			<Route exact path="/" component={Index} />
		</Router>
	)
}

export default App
