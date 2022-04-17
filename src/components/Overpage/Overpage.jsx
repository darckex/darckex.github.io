import React, { useEffect, useState } from "react"

const Overpage = ({ children, title }) => {
	const [state, setState] = useState({
		active: false
	})

	useEffect(() => {
		setState((state) => ({
			...state,
			active: true
		}))
	}, [])

	const handleBack = () => {
		window.history.back()
	}

	return (
		<div className={`overpage ${state.active ? "active" : ""}`}>
			<div className="head-holder header">
				<div className="head">
					<div
						className="icon-back fa-solid fa-chevron-left"
						onClick={handleBack}></div>
					<div className="name">{title}</div>
					<div className="icon-close fa-solid fa-times"></div>
				</div>
			</div>
			{children}
		</div>
	)
}

export default Overpage
