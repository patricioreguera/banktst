import React from "react";

const TableHeader = () => {
	return (
		<thead className="table-dark">
			<tr className="text-start ">
				<th scope="col-1">Name / Last Name</th>
				<th scope="col-1">Email</th>
				<th scope="col-1">Phone</th>
				<th scope="col-1">cardNumber</th>
				<th scope="col-1">cardExpire</th>
				<th scope="col-3"></th>
			</tr>
		</thead>
	);
};

export default TableHeader;
