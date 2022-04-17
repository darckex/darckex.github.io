import React from "react"

const NavItem = ({ icon, text, active, ...attr }) => {
	return (
		<div className={`item ${active ? "active" : ""}`} {...attr}>
			<div className={`icon fa-solid ${icon}`}></div>
			<div className="text">{text}</div>
		</div>
	)
}

export default NavItem
