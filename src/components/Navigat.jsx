import {Googlehome, Spinrilla, Nintendogamecube, Photobucket} from "@icons-pack/react-simple-icons"

const Navigat = () => {
  return (
    <div className="relative w-[700px] h-24 flex justify-center items-center bg-[#333] rounded-xl">
        <ul className="relative flex w-[500px] justify-between items-center list">
            <li className="active">
                <button>
                    <span className="icon2"><Googlehome /></span>
                    <span className="text">Home</span>
                </button>
            </li>

            <li>
                <button>
                    <span className="icon2"><Spinrilla /></span>
                    <span className="text">Spin</span>
                </button>
            </li>

            <li>
                <button>
                    <span className="icon2"><Nintendogamecube /></span>
                    <span className="text">Cube</span>
                </button>
            </li>

            <li>
                <button>
                    <span className="icon2"><Photobucket /></span>
                    <span className="text">Photos</span>
                </button>
            </li>

            <div className="absolute w-20 h-20 flex justify-center items-center before:content-[''] before:absolute before:bottom-[20px] before:w-4/5 before:h-[14px] before:bg-[#29fd53] before:rounded-xl"></div>
        </ul>
    </div>
  )
}
export default Navigat