
import "./App.css";
import { Header } from "./components/Header";

import { Table } from "./components/Table";
import { useFetch } from "./hooks/useFetch";
import Spiner from "./components/Spiner/Spiner";

function App() {
	const { databaseResult, isLoading } = useFetch();

	return (
		<div className="App text-center">
			<Header />
			<div className="container pt-5 pb-5">
				{isLoading ? <Spiner /> : <Table databaseResult={databaseResult} />}
			</div>
		</div>
	);
}

export default App;