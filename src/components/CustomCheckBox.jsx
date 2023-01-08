import {useState} from "react"
import {AiOutlinePoweroff} from "react-icons/ai"
import {useSelector, useDispatch} from "react-redux/es/exports"
import {handleHideBg} from "../redux/BgReducer"

const CustomCheckBox = () => {
	const dispatch = useDispatch()
	const {backGround} = useSelector(state => state.bg)

	console.log(backGround)

	return (
		<label className="relative w-32 h-16 flex justify-center items-center cursor-pointer">
			<input className="absolute check hidden" checked={backGround} type="checkbox" onChange={(e) => dispatch(handleHideBg(e.target.checked))}/>
			<div className="icon5 absolute w-8 h-8 duration-500 transition-all">
				<div className="relative flex justify-center items-center w-full h-full bg-[linear-gradient(#dbdae1,#a3aaba)] shad-icon rounded-full">
					<AiOutlinePoweroff className="h-4 w-4" color={`${backGround ? "red" : "black"}`}/>
				</div>
			</div>
		</label>
	)
}
export default CustomCheckBox