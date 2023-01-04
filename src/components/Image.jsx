import {Vk, Tiktok, Discord, Instagram, Telegram} from '@icons-pack/react-simple-icons';

const Image = () => {
	return (
		<div className="relative flex justify-center items-center flex-wrap">
			<div className="box afterrounded-3xl relative lg:w-[400px] lg:h-[500px] w-[300px] h-[500px] bg-red-500 flex justify-center items-center before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(315deg,#4dff03,#00d0ff)] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[linear-gradient(315deg,#4dff03,#00d0ff)] after:blur-2xl">
				<div className="box relative w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center rounded-3xl before:content-[''] before:absolute before:h-full before:w-full before:bg-[conic-gradient(transparent,transparent,transparent,#e36df7)] before:anim overflow-hidden after:content-[''] after:absolute after:w-full after:h-full after:bg-[conic-gradient(transparent,transparent,transparent,#e36df7)] after:anim2 after:blur-3xl">
					<span className='absolute inset-2 rounded-3xl bg-[#0c1022] z-10'></span>
					<b className="absolute inset-2 bg-[rgba(0,0,0,0.6)] z-10"></b>
					<img
						src="/varya.jpg"
						alt="avatar"
						className="absolute z-20 scale-75 opacity-25 transition-all duration-500 hover:scale-50 hover:opacity-90 hover:translate-y-[-70px]"
					/>

					<div className="z-30 absolute bottom-0 flex justify-center items-center flex-col transition-all duration-500 scale-0 content">
						<h2 className='relative text-white leading-8 text-3xl tracking-widest uppercase text-center'>
							Варя<br /><span className='text-sm'>Будующий программист</span>
						</h2>

						<ul className='relative flex justify-center items-center gap-5 mt-2'>
							<li>
								<a href="https://vk.com/ghtfhsf" className='icon'>
									<Vk />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/7892_8891/" className='icon'>
									<Instagram />
								</a>
							</li>
							<li>
								<a href="https://discordapp.com/users/744524656782082049/" className='icon'>
									<Discord />
								</a>
							</li>
							<li>
								<a href="https://t.me/gqzuwgzjez" className='icon'>
									<Telegram />
								</a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@678388.7.8.9" className='icon'>
									<Tiktok />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Image

// "box relative w-[700px] h-[900px] bg-red-500 my-5 mx-8 flex justify-center items-center before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(315deg,#4dff03,#00d0ff)] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[linear-gradient(315deg,#4dff03,#00d0ff)] after:blur-2xl"