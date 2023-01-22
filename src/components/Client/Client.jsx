import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./client.css";
import { ModalView } from "./ModalViwe";

export const Client = ({ user }) => {
	const [show, setShow] = useState(false);
	const { fullName, email, phone, card } = user;

	return (
		<>
			<tr className="text-start">
				<td>{fullName}</td>
				<td>{email}</td>
				<td>{phone}</td>
				<td>{card}</td>
				<td>
					<Button
						variant="btn btn-outline-primary"
						onClick={() => setShow(true)}
					>
						Detail
					</Button>
				</td>
			</tr>
			<ModalView show={show} handleClose={() => setShow(false)} user={user} />
		</>
	);
};
