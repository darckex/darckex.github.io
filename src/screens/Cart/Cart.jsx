import React from "react"
import { Outlet } from "react-router-dom"
import Overpage from "../../components/Overpage/Overpage"
import Scroll from "../../components/Scroll/Scroll"
import ShopItem from "../../components/ShopItem/ShopItem"

const Cart = () => {
	return (
		<Overpage title="Cart">
			<Scroll>
				<div className="cart">
					{[...Array(5)].map((v, k) => (
						<ShopItem
							key={k}
							link="cart-shop/1"
							name="shop 1"
							location="ajniha"
							price={100000}
							quantity={20}
						/>
					))}
				</div>
			</Scroll>
			<Outlet />
		</Overpage>
	)
}

export default Cart
