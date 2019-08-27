import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Index from "./pages/Index"
import UsersContainer from "./pages/UsersContainer"
import Navbar from "./components/Navbar"

function App() {
	return (
		<Router>
			<div className="container-fluid mt-3">
				<Navbar />
				<Index />
			</div>
			<Route path="/users" component={UsersContainer} />
		</Router>
	)
}

export default App
