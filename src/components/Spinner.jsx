import {useState} from "react"
import {Blob} from "./"

const Spinner = () => {
	const value = Math.ceil(Math.random() * 3600)
	const [rotate, setRotate] = useState(value)
	const [endRoll, setEndRoll] = useState(false)

	const handleSpin = () => {
		setRotate(value + Math.ceil(Math.random() * 3600))
		setTimeout(() => {
			setEndRoll(true)
		}, 5000)
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className={`flex justify-center items-center relative w-96 h-96 z-0 `}>
				<div className="absolute w-24 h-24 bg-white rounded-full z-10 flex justify-center items-center uppercase text-sm text-[#333] tracking-widest border-[4px] border-[rgba(0,0,0,0.75)] cursor-pointer select-none before:content-[''] before:absolute before:top-[-28px] before:w-7 before:h-[30px] before:bg-white clip" onClick={handleSpin}>Крутить</div>

				<div className={`absolute top-0 left-0 w-full h-full bg-[#071111] rounded-full overflow-hidden shadow-[0_0_0_5px_#333,0_0_0_15px_#fff,0_0_0_18px_#111] trans`} style={{"--rot": `${rotate}deg`}}>
					<div className="number" style={{
						"--i": "1",
						"--clr": "#db7093"
					}}>
						<span>
							Варя
						</span>
					</div>

					<div className="number" style={{
						"--i": "2",
						"--clr": "#20b2aa"
					}}>
						<span>
							Леша
						</span>
					</div>

					<div className="number" style={{
						"--i": "3",
						"--clr": "#d63e92"
					}}>
						<span>
							Варя
						</span>
					</div>

					<div className="number" style={{
						"--i": "4",
						"--clr": "#daa520"
					}}>
						<span>
							Леша
						</span>
					</div>

					<div className="number" style={{
						"--i": "5",
						"--clr": "#ff340f"
					}}>
						<span>
							Варя
						</span>
					</div>

					<div className="number" style={{
						"--i": "6",
						"--clr": "#ff7f50"
					}}>
						<span>
							Леша
						</span>
					</div>

					<div className="number" style={{
						"--i": "7",
						"--clr": "#3cb371"
					}}>
						<span>
							Варя
						</span>
					</div>

					<div className="number" style={{
						"--i": "8",
						"--clr": "#4169e1"
					}}>
						<span>
							Леша
						</span>
					</div>
				</div>
			</div>

			{endRoll && (
				<div className={`h-screen absolute w-screen flex bg-slate-50 justify-center items-center z-40 ease-in`}>{" "}
					<Blob classes={"absolute z-50"} setBtn={setEndRoll} />
				</div>
			)}
		</div>
	)
}
export default Spinner