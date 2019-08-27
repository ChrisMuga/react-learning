import React from "react"

function Users(props) {
	const { users } = props
	let usersList
	if (users) {
		usersList = users.map((user, index) => {
			return (
				<li class="list-group-item" key={user.id}>
					{index + 1} <span className="ml-3">{user.name}</span>
				</li>
			)
		})
		usersList = <ul class="list-group">{usersList}</ul>
	} else {
		usersList = <div className="badge badge-danger">No Data</div>
	}

	return (
		<div>
			<h4>Users</h4>
			<hr />
			{usersList}
		</div>
	)
}

export default Users
