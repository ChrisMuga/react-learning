import React from "react"
function Title(props) {
	const { name, count, time } = props
	return (
		<div className="row d-flex flex-column my-1">
			<div className="align-self-center col-md-6">
				<div className="alert alert-success">
					<h1>{name}</h1>
					<hr />
					{count}
					<hr />
					{time}
				</div>
			</div>
		</div>
	)
}

export default Title
