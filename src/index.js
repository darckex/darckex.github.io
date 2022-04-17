import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
// import App from "./Test"

// swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./fonts/fontaweomse/fontaweomse.css"
import "./scss/style.scss"

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
