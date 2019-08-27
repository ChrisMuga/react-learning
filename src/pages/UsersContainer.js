import React, { useState, useEffect } from "react"
import Users from "./Users"
import fetch from "node-fetch"
import API_ENDPOINTS from "./../config"

function UsersContainer(props) {
	const [users, setUsers] = useState(null)
	useEffect(() => {
		fetch(API_ENDPOINTS.USERS)
			.then(users => users.json())
			.then(users => {
				setUsers(users)
			})
			.catch(err => {
				setUsers(null)
			})
	}, [])

	if (users) {
		return <Users users={users} />
	} else {
		return null
	}
}

export default UsersContainer
