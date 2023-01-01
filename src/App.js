import {Image, Timer} from "./components"

const App = () => {
	return (
		<>
			<div className="flex flex-col h-screen gap-8">
				<Image />
				<Timer />
			</div>
		</>
	)
}
export default App