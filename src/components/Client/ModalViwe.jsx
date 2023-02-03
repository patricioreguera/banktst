import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "../../assets/back-logo.png";
import { FcApproval } from "react-icons/fc";
import {
	BsFillCreditCard2BackFill,
	BsFillTelephoneFill,
	BsEnvelopeFill,
} from "react-icons/bs";

export const ModalView = ({ show, handleClose, user, saveOnDatabase }) => {
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header
				closeButton
				style={{ backgroundColor: "black" }}
				className="d-flex  align-items-center"
			>
				<img style={{ height: "40px" }} src={logo} alt="" />
				<h5 className="p-0 mx-3 my-0 text-light">International Bank</h5>
				<span className="text-dark-emphasis">Detail</span>
			</Modal.Header>

			<Modal.Body className="modal-detail ">
				<img className="user-img-detail" src={user.image} alt={user.fullName} />
				<div>
					<h3>
						<FcApproval />
						{user.fullName}
					</h3>
					<spam className="spam-details">
						<BsEnvelopeFill /> Email:
					</spam>
					<h5>{user.email}</h5>
					<spam className="spam-details">
						<BsFillTelephoneFill /> Phone:
					</spam>
					<h5>{user.phone}</h5>
					<spam className="spam-details">
						<BsFillCreditCard2BackFill /> Card Type:
					</spam>
					<h5>{user.card}</h5>
				</div>
			</Modal.Body>
			{/* 		<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>
				Close
				</Button>
			</Modal.Footer> */}
		</Modal>
	);
};
