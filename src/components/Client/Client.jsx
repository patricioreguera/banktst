import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./client.css";
import { ModalView } from "./ModalViwe";

export const Client = ({ user }) => {
	const [show, setShow] = useState(false);

	const { fullName, email, phone, cardNumber, cardExpire } = user;

	const handleClose = () => {
		setShow(false);
	};
	return (
		<>
			<tr className="text-start">
				<td>{fullName}</td>
				<td>{email}</td>
				<td>{phone}</td>
				<td>{cardNumber}</td>
				<td>{cardExpire}</td>
				<td>
					<Button
						variant="btn btn-outline-primary"
						onClick={() => setShow(true)}
					>
						Detail
					</Button>
				</td>
			</tr>
			<ModalView show={show} handleClose={handleClose} user={user} />
		</>
	);
};
