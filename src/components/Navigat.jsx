import {Googlehome, Spinrilla, Nintendogamecube} from "@icons-pack/react-simple-icons"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux/es/exports"
import {handleActiveHome, handleActiveSpin, handleActiveCube} from "../redux/menuReducer"

const Navigat = () => {
	const dispatch = useDispatch()

	const activeHome = useSelector(state => state.menu.activeHome)
	const activeSpin = useSelector(state => state.menu.activeSpin)
	const activeCube = useSelector(state => state.menu.activeCube)

	return (
		<div className="bottom-0 left-0 w-full flex justify-center items-center nohide z-[90] fixed">
			<div className="relative w-[700px] h-16 flex justify-center items-center bg-[#333] rounded-xl hide opacity-0 transition-all duration-700">
				<ul className="relative flex w-[500px] justify-between items-center list">
					<Link to={"/"} onClick={() => dispatch(handleActiveHome())}>
						<li className={`${activeCube || activeSpin || "active"} ${activeHome ? "active" : ""}`}>
							<button>
								<span className="icon2"><Googlehome /></span>
								<span className="text">Home</span>
							</button>
						</li>
					</Link>

					<Link to={"/spinner"} onClick={() => dispatch(handleActiveSpin())}>
						<li className={`${activeSpin ? "active" : ""}`}>
							<button>
								<span className="icon2"><Spinrilla /></span>
								<span className="text">Spin</span>
							</button>
						</li>
					</Link>

					<Link to={"/cube"} onClick={() => dispatch(handleActiveCube())}>
						<li className={`${activeCube ? "active" : ""}`}>
							<button>
								<span className="icon2"><Nintendogamecube /></span>
								<span className="text">Cube</span>
							</button>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}
export default Navigat