import React, { useState, useEffect } from "react"
import { menuItems } from "./data"

function MainPage(props) {
	const [count, setCount] = useState(0)
	const [time, setTime] = useState(0)
	function increase() {
		setTimeout(() => {
			setCount(count + 1)
			setTime(new Date().toLocaleTimeString())
		}, 1000)
	}

	// call/initiate a function using useEffect() hook
	useEffect(increase, [count])

	return (
		<div className="container-fluid">
			{/* pass down value through props */}
			<Title name="Dashboard" count={count} time={time} />
			<div className="row my-1">
				<Menu title="Menu" items={menuItems} />
			</div>
		</div>
	)
}

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
