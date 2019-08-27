import React from "react"
import Title from "./Title"
import Users from "./Users"
function Index(props) {
	return (
		<div>
			<div className="row d-flex justify-content-center">
				<div className="col-md-6">
					<Title name="Index" />
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<Users />
				</div>
			</div>
		</div>
	)
}

export default Index
