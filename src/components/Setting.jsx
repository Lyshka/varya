import {useState} from "react"
import {AiFillSetting, AiFillCloseCircle} from "react-icons/ai"
import {CustomCheckBox} from "./"

const Setting = () => {
	const [isMenu, setIsMenu] = useState(false)

	return (
		<div className="z-[99]">
			<AiFillSetting className="w-10 h-10 absolute right-8 top-8 cursor-pointer hover:rotate-[360deg] transition-all duration-700" color="gray" onClick={() => setIsMenu(true)} />

			{isMenu && (
				<div className={`absolute right-0 top-0 h-screen w-[20%] bg-indigo-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100 transition-all duration-700 flex justify-center items-center`}>
					<AiFillCloseCircle className="absolute right-4 top-4 w-8 h-8 cursor-pointer" color="white" onClick={() => setIsMenu(false)} />
					<div className="flex flex-col gap-y-20">
						<div className="flex gap-x-4 justify-center items-center">
							<span className="text-white text-center tracking-widest">Отключить задний фон</span>
							<CustomCheckBox />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Setting