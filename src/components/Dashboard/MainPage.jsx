import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import Title from "./Title"
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

export default MainPage
