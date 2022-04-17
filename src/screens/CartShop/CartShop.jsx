import React from "react"
import { Outlet } from "react-router-dom"
import Button from "../../components/Button/Button"
import InfoGrid from "../../components/InfoGrid/InfoGrid"
import OfferItem from "../../components/OfferItem/OfferItem"
import Overpage from "../../components/Overpage/Overpage"
import Price from "../../components/Price/Price"
import Product from "../../components/Product/Product"
import Scroll from "../../components/Scroll/Scroll"

const CartShop = () => {
	return (
		<Overpage title="Cart shop">
			<Scroll>
				<div className="cart-shop">
					<div className="clear">Clear</div>
					<InfoGrid
						paper
						info={{
							Quantity: "20 product",
							Price: <Price value={100000} />
						}}
					/>
					<Button className="primary" link="checkout">
						Checkout
					</Button>
					{[...Array(10)].map((v, k) => (
						<Product
							key={k}
							className="small"
							name="product"
							price={10000}
						/>
					))}
					<OfferItem
						link="offer-details/1"
						className="small"
						name="offer name"
						oldPrice={10000}
						price={5000}
						endDate="2022-03-01 12:30 am"
					/>
				</div>
			</Scroll>
			<Outlet />
		</Overpage>
	)
}

export default CartShop
