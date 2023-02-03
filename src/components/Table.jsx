import { Client } from "./Client/Client";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PaginationControler from "./PaginationControler";
import TableHeader from "./TableHeader";
import { Filter } from "./Filter/Filter";
import { PAGINATION_INDEX } from "../AppSetup";

export function Table({ databaseResult }) {
	const [users, setusers] = useState(databaseResult);
	const [filterData, setFilterData] = useState();
	const [paginationIndex, setPaginationIndex] = useState(0);

	useEffect(() => {
		if (filterData) {
			const filterByName = databaseResult?.filter((user) => {
				const nameToLowerCase = user.fullName.toLowerCase();
				const emailToLowerCase = user.email.toLowerCase();
				if (filterData.userInput) {
					return (
						nameToLowerCase.includes(filterData.userInput) &&
						emailToLowerCase.includes(filterData.emailInput)
					);
				} else {
					return emailToLowerCase.includes(filterData.emailInput);
				}
			});
			setusers(filterByName);
		} else {
			const usersSlice = databaseResult?.slice(
				paginationIndex,
				paginationIndex + PAGINATION_INDEX
			);

			setusers(usersSlice);
		}
	}, [paginationIndex, filterData]);

	return (
		<>
			<Filter setFilterData={setFilterData} filterData={filterData} />
			{users?.length === 0 ? (
				<h1>No hay Usuarios</h1>
			) : (
				<table className="table shadow-sm">
					<TableHeader />
					<tbody className="table-group-divider">
						{users?.map((user) => (
							<Client key={user.id} user={user} />
						))}
					</tbody>
				</table>
			)}
			<Pagination
				users={users}
				databaseResult={databaseResult}
				paginationIndex={paginationIndex}
				filterData={filterData}
			/>
			<PaginationControler
				setPaginationIndex={setPaginationIndex}
				paginationIndex={paginationIndex}
				databaseResult={databaseResult}
			/>
		</>
	);
}
