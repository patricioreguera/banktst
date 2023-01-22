import React from "react";
import { PAGINATION_INDEX } from "../AppSetup";

const PaginationControler = ({
	setPaginationIndex,
	paginationIndex,
	databaseResult,
}) => {
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
