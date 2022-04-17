import React from "react"

const Drawer = ({ children, title, active, toggle }) => {
	return (
		<div className={`drawer ${active ? "active" : ""}`}>
			<div className="overlay" onClick={toggle}></div>
			<div className="body">
				<div className="header">{title}</div>
				{children}
			</div>
		</div>
	)
}

export default Drawer
