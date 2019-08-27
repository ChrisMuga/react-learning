import React from "react"
import UsersContainer from "./UsersContainer"
import Title from "./Title"
function UsersPage() {
	return (
		<div>
			<Title name="Users" />
			<div className="row justify-content-center">
				<div className="col-md-6">
					<UsersContainer />
				</div>
			</div>
		</div>
	)
}

export default UsersPage
