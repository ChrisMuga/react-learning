import React from "react"

function Title(props) {
	const { name } = props
	return (
		<div className="row">
			<div className="col-md-6">
				<div className="alert alert-primary">{name}</div>
			</div>
		</div>
	)
}

export default Title
