import React from "react"
import { Link } from "react-router-dom"
import InfoGrid from "../InfoGrid/InfoGrid"
import Price from "../Price/Price"

const OrderItem = ({ id, date, companyName, price, status, link }) => {
	const Element = link ? Link : "div"
	return (
		<Element to={link} className="order-item paper">
			<div className="id">{id}</div>
			<InfoGrid
				info={{
					Status: status,
					"Order date": date,
					"Comapny name": companyName,
					Price: <Price value={price} />
				}}
			/>
		</Element>
	)
}

export default OrderItem
