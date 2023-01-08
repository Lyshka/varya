import {Cubes, Navigat, Spinner, Home, BackGround, Setting, Likes} from "./components"
import {Routes, Route} from "react-router-dom"

const App = () => {
	return (
		<>
			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/spinner" element={<Spinner />} />
				<Route path="/cube" element={<Cubes />} />
			</Routes>

			<Navigat />

			<BackGround />

			<Setting /> */}

			<Likes />
		</>
	)
}
export default App