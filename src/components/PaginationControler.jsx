import React from "react";

const PaginationControler = ({
	setPaginationIndex,
	paginationIndex,
	databaseResult,
}) => {
	const PAGINATION_INDEX = 10;
	return (
		<div>
			<button
				className="btn btn-outline-primary "
				onClick={() => {
					paginationIndex >= PAGINATION_INDEX &&
						setPaginationIndex(paginationIndex - PAGINATION_INDEX);
				}}
			>
				Previus
			</button>
			<button
				className="btn btn-outline-primary ms-3"
				onClick={() => {
					paginationIndex + PAGINATION_INDEX < databaseResult.length &&
						setPaginationIndex(paginationIndex + PAGINATION_INDEX);
				}}
			>
				Next Page
			</button>
		</div>
	);
};

export default PaginationControler;
