import { useState } from "react";
import FilterView from "./FilterView";

export function Filter({ setFilterData, filterData }) {
	const [input, setInput] = useState("");

	const setDataFilter = () => {
		setFilterData(input);
	};

	const deleteDataInfo = () => {
		setFilterData("");
		setInput("");
	};

	function handleChange({ target }) {
		setInput(target.value);
	}

	return (
		<FilterView
			deleteDataInfo={deleteDataInfo}
			input={input}
			handleChange={handleChange}
			setDataFilter={setDataFilter}
		/>
	);
}
