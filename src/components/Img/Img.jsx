import React, { useEffect, useState } from "react"
import ImgDefault from "../../assets/images/default.png"

const Img = ({ className = "", src = ImgDefault, ...attr }) => {
	const [state, setState] = useState({
		src
	})

	useEffect(() => {
		setState((state) => ({ ...state, src }))
	}, [src])

	const handleError = () => {
		setState({ ...state, src: ImgDefault })
	}

	return (
		<img
			className={`img ${className}`}
			onError={handleError}
			src={state.src}
			{...attr}
		/>
	)
}

export default Img
