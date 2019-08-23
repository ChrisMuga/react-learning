import React from "react"

function MainPage(props) {
	return (
		<div className="container-fluid">
			<Title name="I do the Dash" />
		</div>
	)
}

function Title(props) {
	return (
		<div className="row d-flex flex-column my-1">
			<div className="align-self-center col-md-6">
				<div className="alert alert-success">
					<h1>{props.name}</h1>
				</div>
			</div>
		</div>
	)
}

export default MainPage
