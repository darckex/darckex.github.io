import React from "react"
import Input from "../../components/Input/Input"
import Scroll from "../../components/Scroll/Scroll"
import ShopItem from "../../components/ShopItem/ShopItem"

const Shops = () => {
	return (
		<Scroll>
			<div className="shops">
				<Input label="Search..." />
				<div className="grid">
					{[...Array(10)].map((v, k) => (
						<ShopItem
							key={k}
							link="shop/1"
							name="shop name"
							location="ajniha"
							tags={["tag 1", "tag 2", "tag 3"]}
						/>
					))}
				</div>
			</div>
		</Scroll>
	)
}

export default Shops
