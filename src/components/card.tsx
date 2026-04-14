import { motion } from 'framer-motion'
import type { FC } from 'react'

export const Card: FC = () => {
	return (
		<div className="flex flex-col items-center gap-0.5 sm:gap-2 md:gap-3 xl:gap-3 text-white w-full px-1 md:px-1 xl:px-20 lg:w-full 2xl:gap-2">
			{/* Заголовок */}
			<h2 className="text-xl  sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl alt-regular font-bold leading-tight text-center tracking-tight">
				Hey everyone, I'm{' '}
				<span className="text-fuchsia-400">Timofey Ptichenko</span>
			</h2>

			{/* Подзаголовок */}
			<p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl base-regular text-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl">
				Frontend Developer with a{' '}
				<span className="font-semibold">Hardcore Spirit</span>
				<br />I build interfaces that hit hard and work clean
			</p>

			{/* Основной блок */}
			<div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-8 mt-1.5 md:mt-1 xl:mt-4 lg:w-full">
				{/* About */}
				<div className="flex-1 leading-relaxed text-center md:text-center flex flex-col gap-1 items-center xl:gap-3 2xl:gap-3 3xl:min-w-140 xl:min-w-120 lg:min-w-120 md:min-w-72">
					<p className="uppercase alt-regular tracking-widest text-xs sm:text-sm md:text-sm xl:text-lg text-gray-400">
						Couple things about myself
					</p>
					<div className="base-regular text-sm sm:text-sm md:text-sm xl:text-[16px] lg:text-[16px] 3xl:text-lg flex flex-col gap-0.5 md:gap-1 xl:gap-1">
						<p>
							Work as a frontend developer at{' '}
							<a
								href="https://cozy.ventures/"
								className="hover:text-fuchsia-400 font-semibold transition-colors duration-200"
							>
								Cozy Ventures
							</a>
						</p>
						<p>
							Focused on <span className="text-fuchsia-400">TypeScript</span>,{' '}
							<span className="text-fuchsia-400">React</span>,{' '}
							<span className="text-fuchsia-400">Tailwind</span>
						</p>
						<p>Always blending precision with personality</p>
						<p>
							Addicted to <span className="text-fuchsia-400">clean code</span>{' '}
							and <span className="text-fuchsia-400">raw aesthetics</span>
						</p>
						<p className="hidden md:block">
							Hooked on extreme sports, loud music, and wild horizons
						</p>
						<p className="md:hidden">Hooked on extreme sports & loud music</p>
					</div>
				</div>

				{/* Contacts */}
				<div className="flex-1 flex flex-col gap-1 md:gap-2 xl:gap-1 text-center">
					<p className="uppercase alt-regular tracking-widest text-xs sm:text-sm md:text-sm xl:text-lg text-gray-400 3xl:mb-2">
						Shoot `em all
					</p>
					<a
						href="https://t.me/xtimoqx"
						className="base-regular text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						🖤 Telegram
					</a>
					<a
						href="https://github.com/T1moQ"
						className="base-regular text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						🐙 GitHub
					</a>
					<a
						href="https://www.instagram.com/xtimoq?igsh=MWJteW1ydzg3Y2MzeQ%3D%3D&utm_source=qr"
						className="base-regular text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						📷 Instagram
					</a>
					<a
						href="mailto:timofey.ptichenko@gmail.com"
						className="base-regular text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						✉️ Email
					</a>
				</div>
			</div>

			<blockquote className="pt-0 w-full md:pt-10 xl:pt-2 lg:pt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl alt-regular font-semibold tracking-wide text-center max-w-xs md:max-w-md lg:max-w-xl xl:max-w-none">
				Let's cooperate and make something{' '}
				<span className="text-fuchsia-600 font-semibold">bold!</span>
			</blockquote>

			<motion.div
				className="sm:flex -mt-4 lg:mt-5 md:mt-8 xl:-mt-4 3xl:mt-5 hidden xl:hidden overflow-hidden 3xl:flex"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 10, ease: 'easeIn' }}
			>
				<img
					src="/wire.png"
					alt=""
					className="w-72 xl:w-96 lg:w-96 md:w-58 3xl:w-[500px]"
				/>
				<img
					src="/wire.png"
					alt=""
					className="w-72 xl:w-100 lg:w-86 md:w-58 3xl:w-[500px] rotate-180"
				/>
			</motion.div>

			{/* Skulls для мобильных */}
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
				src="/skull1.png"
				className="absolute z-30 w-34 -left-2 -rotate-12 bottom-8 sm:hidden"
			/>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
				src="/skull1.png"
				className="absolute z-30 w-32 -right-2 bottom-10 scale-x-[-1] rotate-12 sm:hidden"
			/>
		</div>
	)
}
