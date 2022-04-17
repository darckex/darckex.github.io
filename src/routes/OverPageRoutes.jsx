import React from "react"
import { Routes, Route } from "react-router-dom"
import Cart from "../screens/Cart/Cart"
import CartShop from "../screens/CartShop/CartShop"
import Checkout from "../screens/Checkout/Checkout"
import OfferDetails from "../screens/OfferDetails/OfferDetails"
import OrderDetails from "../screens/OrderDetails/OrderDetails"
import ProductDetails from "../screens/ProductDetails/ProductDetails"
import Products from "../screens/Products/Products"

const OverPageRoutes = () => {
	return (
		<Routes>
			<Route path="shop/:shopId" element={<Products />}>
				<Route path="product/:productId" element={<ProductDetails />} />
			</Route>
			<Route path="offer-details/:offerId" element={<OfferDetails />} />
			<Route path="order-details/:orderId" element={<OrderDetails />}>
				<Route
					path="offer-details/:offerId"
					element={<OfferDetails />}
				/>
			</Route>
			<Route path="cart/" element={<Cart />}>
				<Route path="cart-shop/:cartId" element={<CartShop />}>
					<Route path="checkout" element={<Checkout />} />
					<Route
						path="offer-details/:offerId"
						element={<OfferDetails />}
					/>
				</Route>
			</Route>
		</Routes>
	)
}

export default OverPageRoutes
