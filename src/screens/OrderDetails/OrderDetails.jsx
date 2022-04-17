import React from "react"
import { Outlet } from "react-router-dom"
import InfoGrid from "../../components/InfoGrid/InfoGrid"
import OfferItem from "../../components/OfferItem/OfferItem"
import OrderItem from "../../components/OrderItem/OrderItem"
import Overpage from "../../components/Overpage/Overpage"
import Product from "../../components/Product/Product"
import Scroll from "../../components/Scroll/Scroll"

const OrderDetails = () => {
	return (
		<Overpage title="Order details">
			<Scroll>
				<div className="order-details">
					<OrderItem
						id={1234}
						status="Pending"
						date="2022-03-01 12:30 am"
						companyName="Company 1"
						price={10000}
					/>
					<InfoGrid
						paper
						info={{
							Products: 20,
							"Delivery price": 20,
							Address: "ajniha",
							"Payment method": "Cash"
						}}
					/>
					{[...Array(10)].map((v, k) => (
						<Product
							key={k}
							className="small"
							name="product name"
							price={10000}
							disableQuant
						/>
					))}
					<OfferItem
						link="offer-details/1"
						className="small"
						name="order name"
						oldPrice={20000}
						price={10000}
						endDate="2022-01-03 12:30am"
						disableQuant
					/>
				</div>
			</Scroll>
			<Outlet />
		</Overpage>
	)
}

export default OrderDetails
