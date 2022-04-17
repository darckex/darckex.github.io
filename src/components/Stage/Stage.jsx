import React from "react"

const Stage = ({ children, ...attr }) => {
	return (
		<div className="stage" {...attr}>
			{children}
		</div>
	)
}

export default Stage
