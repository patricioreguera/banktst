import React from "react";

const TableHeader = () => {
	return (
		<thead className="table-secondary text-start">
			<tr>
				<th className="text-center" scope="col">
					Id
				</th>
				<th scope="col">Name / Last Name</th>
				<th scope="col">Email</th>
				<th scope="col">Phone</th>
				<th scope="col">Age</th>
				<th scope="col"></th>
			</tr>
		</thead>
	);
};

export default TableHeader;
