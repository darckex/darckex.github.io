import React, { useState } from "react"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Shops from "./screens/Shops/Shops"
import { Swiper, SwiperSlide } from "swiper/react"
import Offers from "./screens/Offers/Offers"
import Orders from "./screens/Orders/Orders"
import Settings from "./screens/Settings/Settings"
import { BrowserRouter } from "react-router-dom"
import OverPageRoutes from "./routes/OverPageRoutes"

const App = () => {
	const [state, setState] = useState({
		swiperIndex: 0,
		swiper: null
	})

	const handlePageChange = (e) => {
		setTimeout(() => {
			setState({
				...state,
				swiperIndex: e.activeIndex
			})
		}, 1)
	}

	const handleSwiperInit = (swiper) => {
		setState({ ...state, swiper })
	}

	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<div className="screen">
					<Swiper
						onSwiper={handleSwiperInit}
						onActiveIndexChange={handlePageChange}
						className="pages"
						slidesPerView={1}>
						<SwiperSlide>
							<Shops />
						</SwiperSlide>
						<SwiperSlide>
							<Offers />
						</SwiperSlide>
						<SwiperSlide>
							<Orders />
						</SwiperSlide>
						<SwiperSlide>
							<Settings />
						</SwiperSlide>
					</Swiper>
				</div>
				<Nav swiper={state.swiper} position={state.swiperIndex} />
				<OverPageRoutes />
			</div>
		</BrowserRouter>
	)
}

export default App
