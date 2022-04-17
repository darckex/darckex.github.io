import React, { useState } from "react"

const Input = ({ label, ...attr }) => {
	const [state, setState] = useState({
		focus: !!attr.defaultValue || !!attr.value
	})

	const toggleFocus = (e) => {
		if (e.target.value) return
		setState({ ...state, focus: !state.focus })
	}

	return (
		<label className={`input-holder ${state.focus ? "focus" : ""}`}>
			<input
				className="input"
				onFocus={toggleFocus}
				onBlur={toggleFocus}
				{...attr}
			/>
			<div className="label">{label}</div>
		</label>
	)
}

export default Input
