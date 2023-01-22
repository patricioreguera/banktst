import React, { useState } from "react";

export const Client = ({ user }) => {
	return (
		<>
			<tr className="text-start">
				<th className="text-center " scope="row">
					{user.id}
				</th>
				<td>{user.fullName}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.age} years old</td>
				<td>
					<button type="button" className="btn btn-outline-secondary">
						Detail
					</button>
				</td>
			</tr>
		</>
	);
};
