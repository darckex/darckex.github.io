import React, { useState } from "react"
import Button from "../../components/Button/Button"
import Drawer from "../../components/Drawer/Drawer"
import InfoGrid from "../../components/InfoGrid/InfoGrid"
import Overpage from "../../components/Overpage/Overpage"
import PaymentItem from "../../components/PaymentItem/PaymentItem"
import Price from "../../components/Price/Price"

const Checkout = () => {
	const [state, setState] = useState({
		openDrawer: false,
		paymentMethod: 0
	})
	const toggleDrawer = () => {
		setState((state) => ({
			...state,
			openDrawer: !state.openDrawer
		}))
	}

	const SelectPaymentMethod = (value) => {
		toggleDrawer()
		setState((state) => ({
			...state,
			paymentMethod: value
		}))
	}
	return (
		<Overpage title="Checkout">
			<div className="checkout">
				<InfoGrid
					paper
					info={{
						Price: <Price value={10000} />,
						"Delivery price": <Price value={10000} />,
						Address: "ajniha",
						"Payment method": (
							<Button
								className="secondary"
								onClick={toggleDrawer}>
								Select method
							</Button>
						)
					}}
				/>
				<Button className="primary" link={"/order-details/1"}>
					Start order
				</Button>
				<Drawer
					active={state.openDrawer}
					title="Select payment method"
					toggle={toggleDrawer}>
					<div className="payment-method">
						<PaymentItem
							onClick={() => {
								SelectPaymentMethod(1)
							}}
							icon="fa-credit-card"
							name="Credit card"
						/>
						<PaymentItem
							onClick={() => SelectPaymentMethod(2)}
							icon="fa-money-bill"
							name="Cash"
						/>
						<PaymentItem
							onClick={() => SelectPaymentMethod(3)}
							icon="fa-share"
							name="OMT"
						/>
					</div>
				</Drawer>
			</div>
		</Overpage>
	)
}

export default Checkout
