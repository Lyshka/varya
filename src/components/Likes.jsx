import {AiFillLike, AiFillDislike} from "react-icons/ai"

const Like = () => {
  return (
	  <div className='absolute flex justify-center items-center gap-x-20 h-screen top-0 left-0 w-full bg-black'>
		  <img src={`${1}.jpg`} className="h-full w-[700px] object-cover" alt="" />
		  
		  <div className="flex w-60 justify-between">
			  <button className="text-white text-2xl"><AiFillLike className="w-20 h-20 hover:bg-red-500 rounded-full p-4"/></button>
			  <button className="text-white text-2xl"><AiFillDislike className="w-20 h-20 hover:bg-red-500 rounded-full p-4"/></button>
		  </div>
	  </div>
  )
}
export default Like