import React from "react"

const Price = ({ className = "", value, ...attr }) => {
	return (
		<div className={`price ${className}`} {...attr}>
			{Number(value).toLocaleString()} LBP
		</div>
	)
}

export default Price
