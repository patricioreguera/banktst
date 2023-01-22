import React from "react";

const FilterView = ({
	deleteDataInfo,
	userNameInput,
	handleChange,
	setDataFilter,
	emailUserInput,
}) => {
	return (
		<div className="input-group mb-5 shadow-sm">
			<button
				className="btn btn-secondary"
				type="button"
				onClick={deleteDataInfo}
			>
				Deltete
			</button>
			<input
				type="text"
				id="User"
				className="form-control"
				placeholder="Serch by User Name"
				aria-label="User"
				value={userNameInput}
				onChange={handleChange}
			/>
			<input
				type="text"
				id="email"
				className="form-control"
				placeholder="Serch by email"
				aria-label="email"
				value={emailUserInput}
				onChange={handleChange}
			/>
			<button
				className={
					emailUserInput || userNameInput
						? "btn btn-primary"
						: "btn btn-seconday"
				}
				type="button"
				onClick={setDataFilter}
				disabled={emailUserInput || userNameInput ? false : true}
			>
				Serch ...
			</button>
		</div>
	);
};

export default FilterView;
