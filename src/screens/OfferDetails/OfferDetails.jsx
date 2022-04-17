import React from "react"
import InfoGrid from "../../components/InfoGrid/InfoGrid"
import OfferItem from "../../components/OfferItem/OfferItem"
import Product from "../../components/Product/Product"
import Scroll from "../../components/Scroll/Scroll"
import { Swiper, SwiperSlide } from "swiper/react"
import Overpage from "../../components/Overpage/Overpage"

const OfferDetails = () => {
	return (
		<Overpage title="Offer details">
			<Scroll>
				<div className="offer-details">
					<InfoGrid
						paper
						info={{
							from: "seller name",
							products: 20
						}}
					/>
					<OfferItem
						name="offer name"
						price="10000"
						oldPrice="20000"
						endDate={"2022-03-1 12:30 am"}
					/>
					<div className="slider-holder">
						<Swiper
							breakpoints={{
								0: {
									slidesPerView: 1
								}
							}}
							spaceBetween={24}>
							{[...Array(10)].map((v, k) => (
								<SwiperSlide key={k}>
									<Product
										disableQuant
										className="small"
										name="product name"
										price="100000"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</Scroll>
		</Overpage>
	)
}

export default OfferDetails
