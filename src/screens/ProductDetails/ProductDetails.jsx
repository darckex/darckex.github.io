import React, { useContext, useEffect } from "react"
import InfoGrid from "../../components/InfoGrid/InfoGrid"
import Overpage from "../../components/Overpage/Overpage"
import Product from "../../components/Product/Product"
import Scroll from "../../components/Scroll/Scroll"

const ProductDetails = () => {
	return (
		<Overpage title="Product details">
			<Scroll>
				<div className="product-details">
					<Product name="product 1" price={20000} />
					<InfoGrid
						paper
						info={{
							units: 5,
							country: "lebanon"
						}}
					/>
				</div>
			</Scroll>
		</Overpage>
	)
}

export default ProductDetails
