import toast, { Toaster } from 'react-hot-toast';
import tasks from '../tasks';

const popUp = () => {
    let random = ~~(Math.random() * (28 - 1) + 1);

    return toast.custom(
        <div className='bg-yellow-400 rounded-3xl h-[calc(100vh-500px)] px-40 flex flex-col justify-center items-center border-[4px] border-yellow-200'>
            {`${random}: ${tasks[random].task}`}
            <button className='absolute bottom-0 hover:text-white'>На весь экран</button>
        </div>
    )
}

const Cubes = () => {
    return (
        <>
            <div className="relative flex justify-center items-center w-full top-[-130px] skew-y-[-20deg] anim-cube">
                <div className="z-[2] lg:cubes flex minicubes">
                    <div style={{
                        "--x": -1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("1")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("2")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("3")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 0,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("4")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("5")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("6")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("7")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("8")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("9")} style={{ "--i": 1 }}></span>
                    </div>
                </div>

                <div className="z-[2] lg:cubes cubes2 minicubes">
                    <div style={{
                        "--x": -1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("10")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("11")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("12")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 0,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("13")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("14")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("15")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("16")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("17")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("18")} style={{ "--i": 1 }}></span>
                    </div>
                </div>

                <div className="z-[2] lg:cubes cubes3 minicubes">
                    <div style={{
                        "--x": -1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("19")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("20")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("21")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 0,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("22")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("23")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("24")} style={{ "--i": 1 }}></span>
                    </div>

                    <div style={{
                        "--x": 1,
                        "--y": 0
                    }} className="absolute flex flex-col">
                        <span className="cube" onClick={() => popUp("25")} style={{ "--i": 3 }}></span>
                        <span className="cube" onClick={() => popUp("26")} style={{ "--i": 2 }}></span>
                        <span className="cube" onClick={() => popUp("27")} style={{ "--i": 1 }}></span>
                    </div>
                </div>
            </div>

            <Toaster 
                position='top-center'
                toastOptions={{duration: 10000}}
            />
        </>
    )
}
export default Cubes