import React, { useState } from "react"

const InputQuant = ({ minimum = 0, disableQuant }) => {
	const [state, setState] = useState({
		value: 0
	})

	const addValue = (add) => {
		let newValue = state.value + add

		if (add === 1) {
			newValue = newValue < minimum ? minimum : newValue
		} else {
			newValue = newValue < minimum ? 0 : newValue
		}

		setState({
			...state,
			value: newValue
		})
	}

	const handleInput = (e) => {
		let value = parseInt(e.target.value)

		value = value || 0

		setState({ ...state, value })
	}

	const inputClick = (e) => {
		e.target.select()
	}

	return (
		<div className={`input-quant ${disableQuant ? "disable-quant" : ""}`}>
			<div
				className="icon fa-solid fa-minus"
				onClick={() => addValue(-1)}></div>
			<input
				className="input"
				type="number"
				onInput={handleInput}
				onClick={inputClick}
				value={state.value}
				readOnly={disableQuant}
			/>
			<div
				className="icon fa-solid fa-plus"
				onClick={() => addValue(1)}></div>
		</div>
	)
}

export default InputQuant
