import logo from "../assets/back-logo.png";

export function Header() {
	return (
		<nav className="navbar bg-secondary-subtle shadow-sm" data-bs-theme="dark">
			<div className="d-flex  justify-content-center align-items-center m-3">
				<img style={{ height: "40px" }} src={logo} alt="logo" />
				<h5 className="p-0 mx-3 my-0">International Bank</h5>
			</div>
		</nav>
	);
}
