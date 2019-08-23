import React from "react"
import { menuItems } from "./data"

function MainPage(props) {
	return (
		<div className="container-fluid">
			{/* pass down value through props */}
			<Title name="Dashboard" />
			<div className="row my-1">
				<Menu title="Menu" items={menuItems} />
			</div>
		</div>
	)
}

function Title(props) {
	const { name } = props
	return (
		<div className="row d-flex flex-column my-1">
			<div className="align-self-center col-md-6">
				<div className="alert alert-success">
					<h1>{name}</h1>
				</div>
			</div>
		</div>
	)
}

function Menu(props) {
	const { items, title } = props
	let itemsOrNone
	if (items) {
		itemsOrNone = items.map(item => {
			return (
				<a href="/" className="list-group-item list-group-item-action" key={item.id}>
					{item.title}
				</a>
			)
		})
	} else {
		itemsOrNone = <h1>Nothing Here</h1>
	}
	return (
		<div className="col-md-4">
			<div className="list-group">
				<div className="list-group-item active">{title}</div>
				{itemsOrNone}
			</div>
		</div>
	)
}

export default MainPage
