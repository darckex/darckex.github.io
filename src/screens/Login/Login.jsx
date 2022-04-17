import React, { useState } from "react"
import Button from "../../components/Button/Button"
import Scroll from "../../components/Scroll/Scroll"
import Input from "../../components/Input/Input"
import ImgLogo from "../../assets/images/logo.png"
import Link from "../../components/Link/Link"
import Register from "../Register/Register"

const Login = () => {
	const [state, setState] = useState({
		register: false
	})

	const toggleRegister = () => {
		setState({ ...state, register: !state.register })
	}

	return (
		<div className="login-holder">
			<div className={`stage ${state.register ? "active" : ""}`}>
				<Scroll>
					<div className="login">
						<img
							className="logo"
							src={ImgLogo}
							alt="Ishtari logo"
						/>
						<Input label="EMAIL" />
						<Input label="PASSWORD" type="password" />
						<Button className="large secondary pill">LOGIN</Button>
						<Button
							className="large primary pill"
							onClick={toggleRegister}>
							Create an account
						</Button>
						<Link className="secondary">Forgot password?</Link>
					</div>
				</Scroll>

				<Scroll>
					<Register toggleRegister={toggleRegister} />
				</Scroll>
			</div>
		</div>
	)
}

export default Login
