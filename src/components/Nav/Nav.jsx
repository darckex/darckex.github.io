import React from "react"
import NavItem from "./NavItem"

const Nav = ({ position = 0, swiper }) => {
	const navItems = [
		{ icon: "fa-home", text: "Shops" },
		{ icon: "fa-percent", text: "Offers" },
		{ icon: "fa-list", text: "Orders" },
		{ icon: "fa-cog", text: "Settings" }
	]

	const changeIndex = (index) => {
		swiper.slideTo(index)
	}

	return (
		<div className="nav-holder footer">
			<div className="nav">
				{navItems.map((v, k) => (
					<NavItem
						key={k}
						{...v}
						active={k === position}
						onClick={() => changeIndex(k)}
					/>
				))}
				<div
					className="circle"
					style={{ "--circle-position": position }}></div>
			</div>
		</div>
	)
}

export default Nav
