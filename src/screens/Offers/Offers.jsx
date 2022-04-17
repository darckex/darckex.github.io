import React from "react"
import OfferItem from "../../components/OfferItem/OfferItem"
import Scroll from "../../components/Scroll/Scroll"

const Offers = () => {
	return (
		<Scroll>
			<div className="offers">
				{[...Array(3)].map((v, k) => (
					<OfferItem
						key={k}
						link="offer-details/:id"
						name="offer name"
						price={50000}
						oldPrice={100000}
						endDate="2022-04-12 12:30 am"
					/>
				))}
			</div>
		</Scroll>
	)
}

export default Offers
