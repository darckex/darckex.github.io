import React from "react"
import Input from "../../components/Input/Input"
import OrderItem from "../../components/OrderItem/OrderItem"
import Scroll from "../../components/Scroll/Scroll"
import Tag from "../../components/Tag/Tag"

const Orders = () => {
	return (
		<Scroll>
			<div className="orders">
				<div className="filter">
					<Tag>Pending</Tag>
					<Tag>Done</Tag>
					<Tag>Not accepted</Tag>
				</div>
				<Input label="Search..." />
				{[...Array(10)].map((v, k) => (
					<OrderItem
						key={k}
						link="order-details/1"
						id={k}
						status="Pending"
						date="2022-06-01 12:30 am"
						companyName="Comapny 1"
						price={10000}
					/>
				))}
			</div>
		</Scroll>
	)
}

export default Orders
