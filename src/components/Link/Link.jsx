import React from "react"

const Link = ({ className = "", children, ...attr }) => {
	return (
		<div className={`link ${className}`} {...attr}>
			{children}
		</div>
	)
}

export default Link
