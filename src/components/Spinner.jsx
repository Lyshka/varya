import { useState } from "react"
import { Blob } from "./"

const Spinner = () => {
	const value = Math.ceil(Math.random() * 3600)
	const [rotate, setRotate] = useState(value)
	const [endRoll, setEndRoll] = useState(false)
	const [player1, setplayer1] = useState("")
	const [player2, setplayer2] = useState("")
	const [contine, setContine] = useState(true)

	const handleSpin = () => {
		setRotate(value + Math.ceil(Math.random() * 3600))
		setTimeout(() => {
			setEndRoll(true)
		}, 5000)
	}

	const handlePlayer1 = (e) => {
		const { value } = e.target;
		setplayer1(value)
	}

	const handlePlayer2 = (e) => {
		const { value } = e.target;
		setplayer2(value)
	}

	const handlePLay = () => {
		if (player1.length && player2.length) {
			setContine(false)
		}
		return
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			{contine && (
				<div className="border-[10px] absolute lg:w-[600px] lg:h-[500px] w-full h-[300px] bg-purple-600 rounded-t-3xl z-50 flex justify-center items-center flex-col px-10 gap-y-10">
					<div className="flex flex-col gap-y-10 relative">
						<input type="text" className="w-full lg:h-32 h-16 text-center outline-none text-3xl" id="input1" placeholder="Имя игрока 1" onChange={handlePlayer1} />

						<input type="text" className="w-full lg:h-32 h-16 text-center outline-none text-3xl" id="input1" placeholder="Имя игрока 2" onChange={handlePlayer2} />
					</div>

					<button className="text-4xl" onClick={handlePLay}>Играть</button>
				</div>
			)}
			<div className={`${contine ? "hidden" : "flex"} justify-center items-center relative w-96 h-96 z-0`}>
				<div className="absolute w-24 h-24 bg-white rounded-full z-10 flex justify-center items-center uppercase text-sm text-[#333] tracking-widest border-[4px] border-[rgba(0,0,0,0.75)] cursor-pointer select-none before:content-[''] before:absolute before:top-[-28px] before:w-7 before:h-[30px] before:bg-white clip" onClick={handleSpin}>Крутить</div>

				<div className={`absolute top-0 left-0 w-full h-full bg-[#071111] rounded-full overflow-hidden shadow-[0_0_0_5px_#333,0_0_0_15px_#fff,0_0_0_18px_#111] trans`} style={{ "--rot": `${rotate}deg` }}>
					<div className="number" style={{
						"--i": "1",
						"--clr": "#db7093"
					}}>
						<span>
							{player1}
						</span>
					</div>

					<div className="number" style={{
						"--i": "2",
						"--clr": "#20b2aa"
					}}>
						<span>
							{player2}
						</span>
					</div>

					<div className="number" style={{
						"--i": "3",
						"--clr": "#d63e92"
					}}>
						<span>
							{player1}
						</span>
					</div>

					<div className="number" style={{
						"--i": "4",
						"--clr": "#daa520"
					}}>
						<span>
							{player2}
						</span>
					</div>

					<div className="number" style={{
						"--i": "5",
						"--clr": "#ff340f"
					}}>
						<span>
							{player1}
						</span>
					</div>

					<div className="number" style={{
						"--i": "6",
						"--clr": "#ff7f50"
					}}>
						<span>
							{player2}
						</span>
					</div>

					<div className="number" style={{
						"--i": "7",
						"--clr": "#3cb371"
					}}>
						<span>
							{player1}
						</span>
					</div>

					<div className="number" style={{
						"--i": "8",
						"--clr": "#4169e1"
					}}>
						<span>
							{player2}
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