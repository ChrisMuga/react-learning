import React from "react"
function Menu(props) {
	const { items, title } = props
	let itemsOrNone
	if (items) {
		itemsOrNone = items.map((item, counter) => {
			return (
				<a href="/" className="list-group-item list-group-item-action" key={item.id}>
					{counter + 1}-{item.title}
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

export default Menu
