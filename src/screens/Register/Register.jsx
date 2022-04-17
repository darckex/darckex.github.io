import React from "react"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"

const Register = ({ toggleRegister }) => {
	return (
		<div className="register">
			<div className="head">
				<div
					className="icon-back fa-solid fa-chevron-left"
					onClick={toggleRegister}></div>
				<div className="name">Create an account</div>
			</div>
			<div className="body">
				<form className="form">
					<Input label="EMAIL" />
					<Input label="PASSWORD" />
					<Input label="NAME" />
					<Input label="PHONE NUMBER" />
					<Input label="LOCATION" />
					<Input label="LOCATION DETAILS" />
					<Button className="primary pill">CREATE</Button>
				</form>
			</div>
		</div>
	)
}

export default Register
