import type { FC } from 'react'

export const Card: FC = () => {
	return (
		<div className="flex flex-col items-center gap-2 md:gap-3 xl:gap-3 text-white w-full px-1 md:px-2 xl:px-20">
			{/* Заголовок */}
			<h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl alt-regular font-bold leading-tight text-center tracking-tight">
				Hey everyone, I'm{' '}
				<span className="text-fuchsia-400">Timofey Ptichenko</span>
			</h2>

			{/* Подзаголовок */}
			<p className="text-sm md:text-lg lg:text-xl xl:text-2xl base-regular text-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl">
				Frontend Developer with a{' '}
				<span className="font-semibold">Hardcore Spirit</span>
				<br />I build interfaces that hit hard and work clean
			</p>

			{/* Основной блок */}
			<div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-3 xl:gap-4 w-full mt-2 md:mt-1 xl:mt-4">
				{/* About */}
				<div className="flex-1 space-y-1 leading-relaxed md:space-y-2 text-center md:text-left flex flex-col items-center xl:gap-2 xl:min-w-120">
					<p className="uppercase alt-regular tracking-widest text-xs md:text-sm xl:text-lg text-gray-400">
						Couple things about myself
					</p>
					<div className="base-regular text-xs md:text-sm xl:text-[16px] flex flex-col gap-0.5 md:gap-1 xl:gap-1">
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
				<div className="flex-1 flex flex-col gap-1 md:gap-1 xl:gap-1 xl:text-center md:text-right">
					<p className="uppercase alt-regular tracking-widest text-xs md:text-sm xl:text-lg text-gray-400">
						Shoot `em all
					</p>
					<a
						href="https://t.me/xtimoqx"
						className="base-regular text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						🖤 Telegram
					</a>
					<a
						href="https://github.com/T1moQ"
						className="base-regular text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						🐙 GitHub
					</a>
					<a
						href="https://www.instagram.com/xtimoq?igsh=MWJteW1ydzg3Y2MzeQ%3D%3D&utm_source=qr"
						className="base-regular text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						📷 Instagram
					</a>
					<a
						href="mailto:timofey.ptichenko@gmail.com"
						className="base-regular text-sm md:text-lg lg:text-xl xl:text-2xl hover:text-fuchsia-400 transition-all duration-200 hover:scale-105 md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[26px] min-h-6 md:min-h-7 lg:min-h-8 xl:min-h-9"
					>
						✉️ Email
					</a>
				</div>
			</div>

			<blockquote className="pt-2 md:pt-2 xl:pt-4 text-base md:text-2xl lg:text-3xl xl:text-4xl alt-regular font-semibold tracking-wide text-center max-w-xs md:max-w-md lg:max-w-lg xl:max-w-none">
				Let's cooperate and make something{' '}
				<span className="text-fuchsia-600 font-semibold">bold!</span>
			</blockquote>
		</div>
	)
}
