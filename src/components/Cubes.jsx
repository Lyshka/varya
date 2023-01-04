const Cubes = () => {
    return (
        <div className="relative flex justify-center items-center w-full h-[200px] top-[-80px] skew-y-[-20deg] anim-cube">
            <div className="z-[2] cubes">
                <div style={{
                    "--x": -1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 0,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>
            </div>

            <div className="z-[2] cubes">
                <div style={{
                    "--x": -1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 0,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>
            </div>

            <div className="z-[2] cubes">
                <div style={{
                    "--x": -1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 0,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>

                <div style={{
                    "--x": 1,
                    "--y": 0
                    }} className="absolute flex flex-col">
                    <span className="cube" style={{ "--i": 3 }}></span>
                    <span className="cube" style={{ "--i": 2 }}></span>
                    <span className="cube" style={{ "--i": 1 }}></span>
                </div>
            </div>
        </div>
    )
}
export default Cubes