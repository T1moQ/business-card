import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/card'
import Lightning from '../motion/Backgrounds/Lightning/Lightning'

export const MainPage: FC = () => {
	return (
		<main
			className="bg-black overflow-hidden h-[100svh]"
			style={{ userSelect: 'none' }}
		>
			<div className="relative z-10 flex flex-col items-center pt-3 md:pt-18 xl:pt-14 2xl:pt-6 lg:pt-18 sm:pt-12">
				{/* Desktop и планшет layout */}
				<div className="hidden sm:flex justify-between items-start max-w-screen-2xl 3xl:max-w-[1800px] mx-auto px-4">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="/f-name-logo.png"
						className="w-64 md:w-72 lg:w-80 xl:w-116 2xl:w-96 3xl:w-[420px]"
					/>
					{/* Char */}
					<motion.div
						initial={{ opacity: 0, y: '100vh' }}
						animate={{
							opacity: [0, 1, 1, 1],
							y: ['100vh', '70vh', '70vh', '-4vh'],
						}}
						transition={{
							duration: 6,
							times: [0, 0.25, 0.8, 1],
							ease: ['easeIn', 'linear', 'easeOut'],
							delay: 1,
						}}
						className="flex justify-center items-end w-full max-w-screen-xl mx-auto -mr-4 -ml-4 md:-mr-8 md:-ml-8 lg:-mr-12 lg:-ml-12 xl:-mr-16 xl:-ml-16 3xl:-mr-20 3xl:-ml-20 z-20"
					>
						<img
							src="/char.png"
							className="w-48 md:w-56 lg:w-64 xl:w-[370px] 2xl:w-80 3xl:w-96"
						/>
					</motion.div>
					{/* Last Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="/l-name-logo.png"
						className="w-64 md:w-72 lg:w-80 xl:w-116 2xl:w-96 3xl:w-[420px]"
					/>
				</div>

				{/* Mobile layout */}
				<div className="sm:hidden flex flex-col items-center px-2">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="/f-name-logo.png"
						className="w-52"
					/>
					{/* Last Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="/l-name-logo.png"
						className="w-52"
					/>
					{/* Char - меньше анимации на мобильных */}
					<motion.div
						initial={{ opacity: 0, y: '130vh' }}
						animate={{
							opacity: [0, 1, 1, 1],
							y: ['130vh', '70vh', '70vh', '0vh'],
						}}
						transition={{
							duration: 6,
							times: [0, 0.3, 0.8, 1],
							ease: ['easeIn', 'linear', 'easeOut'],
							delay: 1,
						}}
						className="flex justify-center items-end z-20"
					>
						<img src="/char.png" className="w-40" />
					</motion.div>
				</div>

				{/* Text Card Section */}
				<motion.div
					initial={{ opacity: 0, y: '100vh' }}
					animate={{
						opacity: [0, 1, 1, 1],
						y: ['100vh', '70vh', '70vh', '-4vh'],
					}}
					transition={{
						duration: 6,
						times: [0, 0.25, 0.8, 1],
						delay: 1,
						ease: ['easeIn', 'linear', 'easeOut'],
					}}
					className="relative z-10 flex flex-col items-center max-w-[320px] sm:max-w-[540px] md:max-w-[600px] lg:max-w-[924px] lg:h-[724px] xl:max-w-[1200px] 3xl:max-w-[1400px] md:px-0 xl:-mt-24 md:-mt-14 lg:-mt-17 sm:-mt-12 3xl:-mt-28"
				>
					<img src="/rippedBG1.png" className="w-full sm:hidden" />

					<div className="sm:flex flex-col hidden">
						<img src="/rippedBG1.png" className="w-full" />
						<img src="/rippedBG1.png" className="w-full rotate-180 -mt-4" />
					</div>

					{/* Main Card */}
					<div className="absolute top-6 xl:top-24 lg:top-16 md:top-12 sm:top-12 w-full rounded-lg sm:w-[75%] md:w-[85%] lg:w-[812px] xl:w-[1040px] 3xl:w-[1280px] pb-6 md:pb-8 xl:pb-10 bg-zinc-900 sm:rounded-tr-2xl sm:rounded-tl-2xl lg:rounded-tr-3xl lg:rounded-tl-3xl xl:rounded-tr-4xl xl:rounded-tl-4xl pt-2 md:pt-5 px-5 md:px-4 lg:px-10 xl:px-8 flex justify-center lg:h-[650px] md:h-[80%] lg:pt-8 2xl:pt-5 3xl:pt-8">
						<Card />
					</div>

					{/* Skulls - адаптивные позиции */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
						src="/skull1.png"
						className="absolute z-30 w-32 sm:w-72 md:w-56 lg:w-60 xl:w-[280px] 3xl:w-[400px] -left-2 sm:-left-36 sm:-bottom-32 md:-left-24 lg:-left-20 xl:-left-10 -rotate-12 md:-rotate-20 xl:-rotate-25 -bottom-76 md:bottom-8 lg:bottom-10 xl:bottom-18 2xl:bottom-32 3xl:-bottom-20 3xl:-left-36"
					/>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
						src="/skull1.png"
						className="absolute z-30 w-30 sm:w-72 md:w-52 lg:w-58 xl:w-[300px] 3xl:w-[420px] -right-2 sm:-right-36 sm:-bottom-32 md:-right-16 lg:-right-12 xl:-right-10 -bottom-76 md:bottom-7 lg:bottom-8 xl:bottom-17 2xl:bottom-32 3xl:-bottom-20 3xl:-right-30 scale-x-[-1] rotate-12 md:rotate-20 xl:rotate-25"
					/>
				</motion.div>
			</div>

			{/* Lightning Background - скрыто на мобильных для производительности */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
				className="hidden sm:block absolute inset-0 z-0 h-screen pointer-events-none"
			>
				<div className="w-1/3 h-full absolute top-0 right-0 z-0">
					<Lightning
						hue={280}
						xOffset={-0.5}
						speed={1}
						intensity={1}
						size={1}
					/>
				</div>
				<div className="w-1/3 h-full absolute top-0 left-0 rotate-180 z-0">
					<Lightning
						hue={280}
						xOffset={-0.5}
						speed={1}
						intensity={1}
						size={1}
					/>
				</div>
			</motion.div>

			{/* Mobile */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
				className="sm:hidden block absolute inset-0 z-0 h-screen pointer-events-none"
			>
				<div className="w-full h-full absolute top-0 right-0 z-0">
					<Lightning
						hue={280}
						xOffset={-0.5}
						speed={1}
						intensity={1}
						size={1}
					/>
				</div>
			</motion.div>
		</main>
	)
}
