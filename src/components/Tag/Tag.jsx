import React from "react"

const Tag = ({ className = "", children }) => {
	return <div className={`tag ${className}`}>{children}</div>
}

export default Tag
