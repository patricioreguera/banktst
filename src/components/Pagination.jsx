import React from "react";

const Pagination = ({ users, databaseResult, paginationIndex }) => {
	return (
		<div>
			<h6 className="text-center mt-3 text-secondary bg-light p-2">
				{paginationIndex + 10} Usuarios de {databaseResult?.length}
			</h6>
		</div>
	);
};

export default Pagination;
