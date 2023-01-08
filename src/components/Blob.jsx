import {useEffect, useState} from "react";

import { tasks } from "../taskSpinner"; 

const Blob = ({classes, setBtn}) => {
	const [color, setColor] = useState("")

	let random = ~~(Math.random() * (tasks.length - 1) + 1);

	const createColor = () => {
		let r = Math.floor(Math.random() * (256)),
			 g = Math.floor(Math.random() * (256)),
			 b = Math.floor(Math.random() * (256)),
			color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
		
		color = color.length === 6 ? color + "1" : color
		
		setColor(color)
	}

	useEffect(() => {
		createColor()
	}, [])

	return (
		<div className={`relative flex justify-center items-center flex-wrap py-14 px-0 trans ${classes}`}>
			<div className="relative lg:w-[460px] lg:h-[460px] w-80 h-80 shad before:content-[''] before:absolute lg:before:top-[85px] lg:before:left-[100px] before:top-[20px] before:right-[50px] before:w-9 before:h-9 before:bg-white before:rounded-full before:opacity-90 after:content-[''] after:absolute lg:after:top-[120px] lg:after:left-[140px] after:top-[65px] after:right-[80px] after:w-4 after:h-4 after:bg-white after:rounded-full after:opacity-90 flex justify-center items-center">
				<div className="flex relative justify-center flex-col items-center text-center p-10 gap-4 mt-20">
					<p className="text-gray-700">
						{tasks[random].task}
					</p>

					<button style={{"--clr": color}} className="relative py-3 px-6 text-white rounded-3xl opacity-75 btn hover:opacity-100" onClick={() => {
						setBtn(false)
					}}>Понятно</button>
				</div>
			</div>
		</div>
	)
}
export default Blob