import { Client } from "./Client/Client";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PaginationControler from "./PaginationControler";
import TableHeader from "./TableHeader";
import { Filter } from "./Filter/Filter";

export function Table({ databaseResult }) {
	const [users, setusers] = useState(databaseResult);
	const [filterData, setFilterData] = useState("");
	const [paginationIndex, setPaginationIndex] = useState(0);

	useEffect(() => {
		if (filterData) {
			const filterResult = databaseResult?.filter((user) => {
				const nameToLowerCase = user.fullName.toLowerCase();
				return nameToLowerCase.includes(filterData);
			});
			setusers(filterResult);
		} else {
			const usersSlice = databaseResult?.slice(
				paginationIndex,
				paginationIndex + 10
			);

			setusers(usersSlice);
		}
	}, [paginationIndex, filterData]);

	return (
		<>
			<Filter setFilterData={setFilterData} filterData={filterData} />
			<table className="table shadow-sm">
				<TableHeader />
				<tbody>
					{users?.map((user) => (
						<Client key={user.id} user={user} />
					))}
				</tbody>
			</table>
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
