import React from "react"
import { Link } from "react-router-dom"
import Img from "../Img/Img"
import InputQuant from "../InputQuant/InputQuant"
import Price from "../Price/Price"

const OfferItem = ({
	className = "",
	img,
	link,
	name,
	price,
	oldPrice,
	endDate,
	disableQuant
}) => {
	return (
		<div className={`offer-item ${className}`}>
			{!!link ? (
				<Link to={link}>
					<Img src={img} />
				</Link>
			) : (
				<Img src={img} />
			)}
			<div className="info">
				<div className="name">{name}</div>
				<div className="price-holder">
					<Price className="old-price" value={oldPrice} />
					<Price value={price} />
				</div>
				<div className="end">
					Expiry date: <span>{endDate}</span>
				</div>
				<InputQuant disableQuant={disableQuant} />
			</div>
		</div>
	)
}

export default OfferItem
