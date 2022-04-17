import React, { createElement } from "react"
import { Link } from "react-router-dom"

const Button = ({
	className = "",
	link,
	children,
	type = "button",
	...attr
}) => {
	const element = !!link ? Link : "button"
	const Btn = createElement(
		element,
		{
			className: `button ${className}`,
			children,
			type,
			to: link,
			...attr
		},
		children
	)
	return Btn
}

export default Button
