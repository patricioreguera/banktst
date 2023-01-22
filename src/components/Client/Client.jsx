import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./client.css";
import { ModalView } from "./ModalViwe";

export const Client = ({ user }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<tr className="text-start">
				<td>{user.fullName}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.card}</td>
				<td>
					<Button variant="btn btn-outline-primary" onClick={handleShow}>
						view detail
					</Button>
				</td>
			</tr>
			<ModalView show={show} handleClose={handleClose} user={user} />
		</>
	);
};
