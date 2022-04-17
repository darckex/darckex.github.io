import React from "react"

const InfoGrid = ({ info = {}, paper }) => {
	return (
		<div className={`info-grid ${paper ? "paper" : ""}`}>
			{Object.keys(info).map((v, k) => (
				<React.Fragment key={k}>
					<div className="label">{v}:</div>
					<div className="value">{info[v]}</div>
				</React.Fragment>
			))}
		</div>
	)
}

export default InfoGrid
