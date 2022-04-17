import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
			<div className="holder">
				<div className="name">Ishtari</div>
				<Link to="/cart">
					<div className="icon fa-solid fa-shopping-cart"></div>
				</Link>
			</div>
		</div>
	)
}

export default Header
