import { useState } from "react";
import FilterView from "./FilterView";

export function Filter({ setFilterData, filterData }) {
	const [userNameInput, setUserNameInput] = useState("");
	const [emailUserInput, setEmailUserInput] = useState("");

	const setDataFilter = () => {
		setFilterData({
			userInput: userNameInput,
			emailInput: emailUserInput,
		});
	};

	const deleteDataInfo = () => {
		setFilterData("");
		setUserNameInput("");
		setEmailUserInput("");
	};

	function handleChange({ target }) {
		if (target.id === "email") {
			setEmailUserInput(target.value);
		} else {
			setUserNameInput(target.value);
		}
	}

	return (
		<>
			<FilterView
				deleteDataInfo={deleteDataInfo}
				userNameInput={userNameInput}
				emailUserInput={emailUserInput}
				handleChange={handleChange}
				setDataFilter={setDataFilter}
			/>
		</>
	);
}
