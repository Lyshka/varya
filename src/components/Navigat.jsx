import {Googlehome, Spinrilla, Nintendogamecube, Photobucket} from "@icons-pack/react-simple-icons"
import {useState} from "react"
import {Link} from "react-router-dom"

const Navigat = () => {
	const [activeHome, setActiveHome] = useState(false)
	const [activeSpin, setActiveSpin] = useState(false)
	const [activeCube, setActiveCube] = useState(false)
	const [activePhoto, setActivePhoto] = useState(false)

	const handleActiveHome = () => {
		setActiveHome(true)
		setActiveSpin(false)
		setActiveCube(false)
		setActivePhoto(false)
	}

	const handleActiveSpin = () => {
		setActiveHome(false)
		setActiveSpin(true)
		setActiveCube(false)
		setActivePhoto(false)
	}

	const handleActiveCube = () => {
		setActiveHome(false)
		setActiveSpin(false)
		setActiveCube(true)
		setActivePhoto(false)
	}

	const handleActivePhoto = () => {
		setActiveHome(false)
		setActiveSpin(false)
		setActiveCube(false)
		setActivePhoto(true)
	}

	return (
		<div className="bottom-0 left-0 w-full flex justify-center items-center nohide z-[90] fixed">
			<div className="relative w-[700px] h-16 flex justify-center items-center bg-[#333] rounded-xl hide opacity-0 transition-all duration-700">
				<ul className="relative flex w-[500px] justify-between items-center list">
					<Link to={"/"} onClick={handleActiveHome}>
						<li className={`${activeCube || activePhoto || activeSpin || "active"} ${activeHome ? "active" : ""}`}>
							<button>
								<span className="icon2"><Googlehome /></span>
								<span className="text">Home</span>
							</button>
						</li>
					</Link>

					<Link to={"/spinner"} onClick={handleActiveSpin}>
						<li className={`${activeSpin ? "active" : ""}`}>
							<button>
								<span className="icon2"><Spinrilla /></span>
								<span className="text">Spin</span>
							</button>
						</li>
					</Link>

					<Link to={"/cube"} onClick={handleActiveCube}>
						<li className={`${activeCube ? "active" : ""}`}>
							<button>
								<span className="icon2"><Nintendogamecube /></span>
								<span className="text">Cube</span>
							</button>
						</li>
					</Link>

					<li className={`${activePhoto ? "active" : ""}`} onClick={handleActivePhoto}>
						<button>
							<span className="icon2"><Photobucket /></span>
							<span className="text">Photos</span>
						</button>
					</li>

				</ul>
			</div>
		</div>
	)
}
export default Navigat