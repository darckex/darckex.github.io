import React from "react"

const SettingItem = ({ icon, name }) => {
	return (
		<div className="setting-item paper">
			<div className={`icon fa-fw fa-solid ${icon}`}></div>
			{name}
		</div>
	)
}

export default SettingItem
