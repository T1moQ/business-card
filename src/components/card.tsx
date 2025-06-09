import type { FC } from 'react'

export const Card: FC = () => {
	return (
		<div className="flex flex-col items-center gap-6 text-white max-w-4xl mx-auto px-6">
			{/* Заголовок */}
			<h2 className="text-4xl lg:text-5xl alt-regular font-bold leading-tight text-center tracking-tight">
				Hey everyone, I’m{' '}
				<span className="text-fuchsia-400">Timofey Ptichenko</span>
			</h2>

			{/* Подзаголовок */}
			<p className="text-xl lg:text-2xl base-regular text-center max-w-2xl">
				Frontend Developer with a{' '}
				<span className="font-semibold">Hardcore Spirit</span>. I build
				interfaces that hit hard and work clean.
			</p>

			{/* Основной блок */}
			<div className="flex flex-col lg:flex-row gap-10 w-full mt-4">
				{/* About */}
				<div className="flex-1 space-y-3 text-center">
					<p className="uppercase alt-regular tracking-widest text-sm text-gray-400">
						Couple things about myself
					</p>
					<div className="space-y-1 base-regular leading-relaxed">
						<p>
							Focused on{' '}
							<span className="text-fuchsia-400 font-semibold">TypeScript</span>
							, <span className="text-fuchsia-400 font-semibold">React</span>,{' '}
							<span className="text-fuchsia-400 font-semibold">Tailwind</span>
						</p>
						<p>Addicted to clean code and raw aesthetics</p>
						<p>Always blending precision with personality</p>
					</div>
				</div>

				{/* Contacts */}
				<div className="flex-1 flex flex-col gap-2 text-sm text-center text-gray-300">
					<p className="uppercase alt-regular tracking-widest text-sm text-gray-400">
						Shoot `em all
					</p>
					<a href="mailto:youremail@example.com" className="hover:text-white">
						✉ youremail@example.com
					</a>
					<a href="https://t.me/yourhandle" className="hover:text-white">
						🖤 @yourhandle (Telegram)
					</a>
					<a
						href="https://github.com/yourusername"
						className="hover:text-white"
					>
						🐙 github.com/yourusername
					</a>
				</div>
			</div>

			{/* Финальный призыв */}
			<p className="pt-4 text-2xl alt-regular font-semibold tracking-wide text-center">
				Let’s cooperate and make something{' '}
				<span className="text-fuchsia-600 font-semibold">bold.</span>
			</p>
		</div>
	)
}
