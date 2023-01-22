import React from "react";

const Pagination = ({ users, databaseResult, paginationIndex, filterData }) => {
	return (
		<div>
			<h6 className="text-center mt-3 text-secondary bg-light p-2">
				<strong>{filterData ? users?.length : paginationIndex + 10} </strong>
				Usuarios de
				<strong> {filterData ? users?.length : databaseResult?.length}</strong>
			</h6>
		</div>
	);
};

export default Pagination;
