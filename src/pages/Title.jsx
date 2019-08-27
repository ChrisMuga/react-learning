import React from "react"

function Title(props) {
	const { name } = props
	return <div className="alert alert-primary">{name}</div>
}

export default Title
