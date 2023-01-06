import {useEffect, useState} from "react"

const endDate = "05/07/2023 00:00:00"

const Timer = () => {
	const [day, setDay] = useState(0)
	const [hour, setHour] = useState(0)
	const [minute, setMinute] = useState(0)
	const [second, setSecond] = useState(0)
	const [offsetDay, setOffsetDay] = useState(0)
	const [offsetHour, setOffsetHour] = useState(0)
	const [offsetMinute, setOffsetMinute] = useState(0)
	const [offsetSecond, setOffsetSecond] = useState(0)

	useEffect(() => {
		let x = setInterval(() => {
			let now = new Date(endDate).getTime()
			let countDown = new Date().getTime()
			let distance = now - countDown

			let d = ~~(distance / (1000 * 60 * 60 * 24))
			let h = ~~((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			let m = ~~((distance % (1000 * 60 * 60)) / (1000 * 60))
			let s = ~~((distance % (1000 * 60)) / 1000)

			let offsetD = 440 - (440 * d) / 365
			let offsetH = 440 - (440 * h) / 24
			let offsetM = 440 - (440 * m) / 60
			let offsetS = 440 - (440 * s) / 60

			setDay(d)
			setHour(h)
			setMinute(m)
			setSecond(s)

			setOffsetDay(offsetD)
			setOffsetHour(offsetH)
			setOffsetMinute(offsetM)
			setOffsetSecond(offsetS)
		})

		return () => clearInterval(x)
	}, [second])

	return (
		<>
			<div className="flex gap-8 flex-wrap justify-center items-center">
				<div className="circle time">
					<div className="dots before:content-[''] before:absolute before:top-[-3px] before:w-6 before:h-6 before:bg-[#ffffff] before:rounded-[50%] before:shadow-[0_0_20px,0_0_60px]" style={{rotate: `${day * 0.986}deg`}}>

					</div>

					<svg className="svg">
						<circle cx={70} cy={70} r={70} className="stroke-[8px]">

						</circle>

						<circle cx={70} cy={70} r={70} className="stroke-[8px] stroke-[#ffffff]" color="#ffffff" strokeDashoffset={offsetDay} strokeDasharray={440}>

						</circle>
					</svg>

					<div>
						{day}<br /><span>Дней</span>
					</div>
				</div>

				<div className="circle time">
					<div className={`dots before:content-[''] before:absolute before:top-[-3px] before:w-6 before:h-6 before:bg-[#ff2972] before:rounded-[50%] before:shadow-[0_0_20px,0_0_60px] rotate-[${hour * 15}deg]`} style={{rotate: `${hour * 15}deg`}}>

					</div>

					<svg className="svg">
						<circle cx={70} cy={70} r={70} className="stroke-[8px]">

						</circle>

						<circle cx={70} cy={70} r={70} className="stroke-[8px] stroke-[#ff2972]" color="#ff2972" strokeDashoffset={offsetHour} strokeDasharray={440}>

						</circle>
					</svg>

					<div>
						{hour}<br /><span>Часов</span>
					</div>
				</div>

				<div className="circle time">
					<div className="dots before:content-[''] before:absolute before:top-[-3px] before:w-6 before:h-6 before:bg-[#fee800] before:rounded-[50%] before:shadow-[0_0_20px,0_0_60px]" style={{rotate: `${minute * 6}deg`}}>

					</div>

					<svg className="svg">
						<circle cx={70} cy={70} r={70} className="stroke-[8px]">

						</circle>

						<circle cx={70} cy={70} r={70} className="stroke-[8px] stroke-[#fee800]" color="#fee800" strokeDashoffset={offsetMinute} strokeDasharray={440}>

						</circle>
					</svg>

					<div>
						{minute}<br /><span>Минут</span>
					</div>
				</div>

				<div className="circle time">
					<div className={`dots before:content-[''] before:absolute before:top-[-3px] before:w-6 before:h-6 before:bg-[#04fc43] before:rounded-[50%] before:shadow-[0_0_20px,0_0_60px]`} style={{rotate: `${second * 6}deg`}}>

					</div>

					<svg className="svg">
						<circle cx={70} cy={70} r={70} className="stroke-[8px]">

						</circle>

						<circle cx={70} cy={70} r={70} className="stroke-[8px] stroke-[#04fc43]" color="#04fc43" strokeDashoffset={offsetSecond} strokeDasharray={440}>

						</circle>
					</svg>

					<div>
						{second}<br /><span>Секунд</span>
					</div>
				</div>
			</div>

			<h2 className="text-6xl text-white text-center leading-10">
				До моего дня рождения
			</h2>
		</>
	)
}
export default Timer

// style = {"--curcle:#ffffff"}
// style = {"--curcle:#ff2972"}
// style = {"--curcle:#fee800"}
// style = {"--curcle:#04fc43"}