import React from "react"

const PaymentItem = ({ icon, name, ...attr }) => {
	return (
		<div className="payment-item" {...attr}>
			<div className={`icon fa-fw fa-solid ${icon}`}></div>
			{name}
		</div>
	)
}

export default PaymentItem
