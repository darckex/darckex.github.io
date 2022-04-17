import React from "react"
import { Link } from "react-router-dom"
import Img from "../Img/Img"
import Price from "../Price/Price"
import Tag from "../Tag/Tag"

const ShopItem = ({
	name,
	location,
	img,
	tags = [],
	price,
	quantity,
	link = "/"
}) => {
	const showTags = tags.slice(0, 2)

	return (
		<Link to={link} className="shop-item">
			<Img src={img} alt={name} />
			<div className="info-holder">
				<div className="name">{name}</div>
				<div className="location">{location}</div>
				<div className="tags-holder">
					{showTags.map((v, k) => (
						<Tag key={k}>{v}</Tag>
					))}

					{tags.length > 2 && (
						<Tag>
							<div className="icon fa-solid fa-ellipsis"></div>
						</Tag>
					)}
				</div>
				{!!price && <Price value={price} />}
				{!!quantity && (
					<div className="quantity">{quantity} products</div>
				)}
			</div>
		</Link>
	)
}

export default ShopItem
