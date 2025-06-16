import type { FC } from 'react'

export const Card: FC = () => {
	return (
		<div className="flex flex-col items-center xl:gap-3 text-white w-full xl:px-2">
			{/* Заголовок */}
			<h2 className="lg:text-4xl alt-regular font-bold leading-tight text-center tracking-tight">
				Hey everyone, I’m{' '}
				<span className="text-fuchsia-400">Timofey Ptichenko</span>
			</h2>

			{/* Подзаголовок */}
			<p className="text-xl xl:text-2xl base-regular text-center lg:max-w-2xl">
				Frontend Developer with a{' '}
				<span className="font-semibold">Hardcore Spirit</span>
				<br />I build interfaces that hit hard and work clean
			</p>

			{/* Основной блок */}
			<div className="flex lg:flex-row xl:gap-4 w-full xl:mt-2">
				{/* About */}
				<div className=" space-y-2 text-center">
					<p className="uppercase alt-regular tracking-widest xl:text-md text-gray-400">
						Couple things about myself
					</p>
					<div className="base-regular leading-relaxed xl:text-md flex flex-col xl:gap-1">
						<p>
							Work as a frontend developer at{' '}
							<a
								href="https://cozy.ventures/"
								className="hover:text-fuchsia-400 font-semibold"
							>
								Cozy Ventures
							</a>
						</p>
						<p>
							Focused on <span className="text-fuchsia-400">TypeScript</span>,{' '}
							<span className="text-fuchsia-400 ">React</span>,{' '}
							<span className="text-fuchsia-400 ">Tailwind</span>
						</p>
						<p>Always blending precision with personality</p>
						<p>
							Addicted to <span className="text-fuchsia-400">clean code</span>{' '}
							and <span className="text-fuchsia-400"> raw aesthetics</span>
						</p>
						<p>Hooked on extreme sports, loud music, and wild horizons</p>
					</div>
				</div>

				{/* Contacts */}
				<div className="flex-1 flex flex-col xl:gap-1 xl:text-md text-center">
					<p className="uppercase alt-regular tracking-widest xl:text-md text-gray-400">
						Shoot `em all
					</p>
					<a
						href="https://t.me/xtimoqx"
						className="base-regular xl:text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						🖤 Telegram
					</a>
					<a
						href="https://github.com/T1moQ"
						className="base-regular xl:text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						🐙 GitHub
					</a>
					<a
						href="https://www.instagram.com/xtimoq?igsh=MWJteW1ydzg3Y2MzeQ%3D%3D&utm_source=qr"
						className=" base-regular xl:text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						📷 Instagram
					</a>
					<a
						href="mailto:timofey.ptichenko@gmail.com"
						className="base-regular xl:text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						✉️ Email
					</a>
				</div>
			</div>

			<blockquote className="xl:pt-2 xl:text-4xl alt-regular font-semibold tracking-wide text-center">
				Let’s cooperate and make something{' '}
				<span className="text-fuchsia-600 font-semibold">bold!</span>
			</blockquote>
		</div>
	)
}
