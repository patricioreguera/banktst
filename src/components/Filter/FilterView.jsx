import React from "react";

const FilterView = ({ deleteDataInfo, input, handleChange, setDataFilter }) => {
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
				id="select1"
				className="form-control"
				placeholder="Username"
				aria-label="Username"
				value={input}
				onChange={handleChange}
			/>
			<button className="btn btn-primary" type="button" onClick={setDataFilter}>
				Find
			</button>
		</div>
	);
};

export default FilterView;
