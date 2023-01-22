import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ModalView = ({ show, handleClose, user }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Body className="modal-detail">
				<img className="user-img-detail" src={user.image} alt={user.fullName} />
				<div>
					<h3>{user.fullName}</h3>
					<h6>
						<strong>Email: </strong>
						{user.email}
					</h6>
					<h6>
						<strong>Phone: </strong>
						{user.phone}
					</h6>
					<h6>
						<strong>Card Type: </strong>
						{user.card}
					</h6>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
