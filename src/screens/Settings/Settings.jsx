import React from "react"
import Scroll from "../../components/Scroll/Scroll"
import SettingItem from "../../components/SettingItem/SettingItem"

const Settings = () => {
	return (
		<Scroll>
			<div className="settings">
				<SettingItem icon="fa-user" name="Profile" />
				<SettingItem icon="fa-sign-out" name="Sign out" />
			</div>
		</Scroll>
	)
}

export default Settings
