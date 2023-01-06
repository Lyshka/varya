const BackGround = () => {
    return (
        <div className="absolute top-0 left-0 h-screen w-full overflow-hidden z-[-1]">
            {Array(150).fill(1).map((el, idx) => {
                let size = Math.random() * 5 + 0.2
                let posX = ~~(Math.random() * window.innerWidth)
                let delay = Math.random() * -20
                let duration = 1 + Math.random() * 5

                return (
                    <i key={idx} className={`absolute h-52 grad rounded-bl-md rounded-br-md`} style={{
                        left: `${posX}px`,
                        width: `${size}px`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`
                    }}></i>
                )
            })}
        </div>
    )
}
export default BackGround