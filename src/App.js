import {Cubes, Image, Navigat, Spinner, Time, Home} from "./components"
import {Routes, Route} from "react-router-dom"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/spinner" element={<Spinner />} />
				<Route path="/cube" element={<Cubes />} />
			</Routes>

			<Navigat />
		</>
	)
}
export default App