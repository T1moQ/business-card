import type { FC } from 'react'

export const Card: FC = () => {
	return (
		<div className="flex flex-col items-center gap-5 text-white w-full px-6">
			{/* Заголовок */}
			<h2 className="text-4xl alt-regular font-bold leading-tight text-center tracking-tight">
				Hey everyone, I’m{' '}
				<span className="text-fuchsia-400">Timofey Ptichenko</span>
			</h2>

			{/* Подзаголовок */}
			<p className="text-xl lg:text-2xl base-regular text-center max-w-2xl">
				Frontend Developer with a{' '}
				<span className="font-semibold">Hardcore Spirit</span>
				<br />I build interfaces that hit hard and work clean
			</p>

			{/* Основной блок */}
			<div className="flex lg:flex-row gap-10 w-full mt-4">
				{/* About */}
				<div className="flex-1 space-y-3 text-center">
					<p className="uppercase alt-regular tracking-widest text-sm text-gray-400">
						Couple things about myself
					</p>
					<div className="space-y-1 base-regular leading-relaxed">
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
				<div className="flex-1 flex flex-col gap-2 text-sm text-center">
					<p className="uppercase alt-regular tracking-widest text-sm text-gray-400">
						Shoot `em all
					</p>
					<a
						href="https://t.me/xtimoqx"
						className="base-regular text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						🖤 Telegram
					</a>
					<a
						href="https://github.com/T1moQ"
						className="base-regular text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						🐙 GitHub
					</a>
					<a
						href="https://www.instagram.com/xtimoq?igsh=MWJteW1ydzg3Y2MzeQ%3D%3D&utm_source=qr"
						className=" base-regular text-2xl hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						📷 Instagram
					</a>
					<a
						href="mailto:timofey.ptichenko@gmail.com"
						className="base-regular text-2xl  hover:text-fuchsia-400 hover:text-[26px] min-h-9"
					>
						✉️ Email
					</a>
				</div>
			</div>

			<blockquote className="pt-4 text-3xl alt-regular font-semibold tracking-wide text-center">
				Let’s cooperate and make something{' '}
				<span className="text-fuchsia-600 font-semibold">bold!</span>
			</blockquote>
		</div>
	)
}
