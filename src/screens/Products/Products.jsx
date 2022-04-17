import React from "react"
import { Outlet } from "react-router-dom"
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter"
import Overpage from "../../components/Overpage/Overpage"
import Product from "../../components/Product/Product"
import Scroll from "../../components/Scroll/Scroll"
import ShopItem from "../../components/ShopItem/ShopItem"
import { products } from "../../dummyData"

const Products = () => {
	return (
		<Overpage title="Products">
			<Scroll>
				<div className="products">
					<ShopItem name="shop name" location="ajniha" />
					<CategoryFilter />
					<div className="grid">
						{products.map((v, k) => (
							<Product key={k} link="product/1" {...v} />
						))}
					</div>
				</div>
			</Scroll>
			<Outlet />
		</Overpage>
	)
}

export default Products
