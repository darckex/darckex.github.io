import React from "react"
import { Link } from "react-router-dom"
import Img from "../Img/Img"
import InputQuant from "../InputQuant/InputQuant"
import Price from "../Price/Price"

const Product = ({
	className = "",
	name,
	link,
	price,
	img,
	disableQuant = false
}) => {
	return (
		<div className={`product ${className}`}>
			{!!link ? (
				<Link to={link}>
					<Img src={img} alt={name} />
				</Link>
			) : (
				<Img src={img} alt={name} />
			)}
			<div className="info">
				<div className="name">{name}</div>
				<Price value={price} />
				<InputQuant disableQuant={disableQuant} />
			</div>
		</div>
	)
}

export default Product
