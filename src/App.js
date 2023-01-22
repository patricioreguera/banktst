
import "./App.css";
import { Header } from "./components/Header";

import { Table } from "./components/Table";
import { useFetch } from "./hooks/useFetch";
import Spiner from "./components/Spiner/Spiner";
import { useState } from "react";

function App() {
	const [paginationIndex, setPaginationIndex] = useState(10);
	const { databaseResult, isLoading } = useFetch(paginationIndex);

	return (
		<div className="App text-center">
			<Header />
			<div className="container pt-5 pb-5">
				{isLoading ? <Spiner /> : <Table 
				databaseResult={databaseResult} 
				setPaginationIndex={setPaginationIndex} 
				paginationIndex={paginationIndex}
				/>}
			</div>
		</div>
	);
}

export default App;