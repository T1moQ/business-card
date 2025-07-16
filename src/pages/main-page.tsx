// import type { FC } from 'react'
// import { motion } from 'framer-motion'
// import { Card } from '../components/card'
// import Lightning from '../motion/Backgrounds/Lightning/Lightning'

// export const MainPage: FC = () => {
// 	return (
// 		<main
// 			className="bg-black overflow-hidden h-[100svh]"
// 			style={{ userSelect: 'none' }}
// 		>
// 			<div className="relative z-10 flex flex-col items-center xl:pt-6">
// 				<div className="flex justify-between items-start max-w-screen-2xl mx-auto">
// 					{/* Name */}
// 					<motion.img
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
// 						src="./public/f-name-logo.png"
// 						className="xl:w-96"
// 					/>
// 					{/* Char */}
// 					<motion.div
// 						initial={{ opacity: 0, y: '100vh' }}
// 						animate={{
// 							opacity: [0, 1, 1, 1],
// 							y: ['100vh', '70vh', '70vh', '-4vh'],
// 						}}
// 						transition={{
// 							duration: 6,
// 							times: [0, 0.25, 0.8, 1],
// 							ease: ['easeIn', 'linear', 'easeOut'],
// 							delay: 1,
// 						}}
// 						className="flex justify-center items-end w-full max-w-screen-xl mx-auto -mr-16 -ml-16 z-20"
// 					>
// 						<img src="./public/char.png" className="xl:w-[300px]" />
// 					</motion.div>
// 					{/* Last Name */}
// 					<motion.img
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
// 						src="./public/l-name-logo.png"
// 						className="xl:w-96"
// 					/>
// 				</div>
// 				{/* Text */}
// 				<motion.div
// 					initial={{ opacity: 0, y: '100vh' }}
// 					animate={{
// 						opacity: [0, 1, 1, 1],
// 						y: ['100vh', '70vh', '70vh', '-4vh'],
// 					}}
// 					transition={{
// 						duration: 6,
// 						times: [0, 0.25, 0.8, 1],
// 						delay: 1,
// 						ease: ['easeIn', 'linear', 'easeOut'],
// 					}}
// 					className="relative z-10 mt-[-95px] flex flex-col items-center w-[1200px]"
// 				>
// 					{/* Top Ripped */}
// 					<img src="./public/ripped.png" className="w-[1100px] rotate-180" />
// 					{/* Card */}
// 					<div className="flex items-center xl:gap-3 xl:-mt-26">
// 						<img
// 							src="./public/ripped-side.png"
// 							className="w-[50px] h-auto rotate-180 mt-18 -ml-10"
// 						/>
// 						<div className="relative w-[1040px] pb-10 bg-zinc-900 rounded-tr-4xl rounded-tl-4xl xl:pt-6 px-12 flex justify-center">
// 							<Card />
// 						</div>
// 						<img
// 							src="./public/ripped-side.png"
// 							className="h-[570px] mt-20 -mr-5"
// 						/>
// 						{/* Skulls */}
// 						<motion.img
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
// 							src="./public/skull1.png"
// 							className="absolute z-30 w-[200px] -left-10 -rotate-25 bottom-14"
// 						/>
// 						<motion.img
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
// 							src="./public/skull1.png"
// 							className="absolute z-30 w-[220px] -right-10 bottom-14 scale-x-[-1] rotate-25"
// 						/>
// 					</div>
// 				</motion.div>
// 			</div>
// 			<motion.div
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
// 				className="absolute inset-0 z-0 h-screen pointer-events-none"
// 			>
// 				<div className="w-1/3 h-full absolute top-0 right-0 z-0">
// 					<Lightning
// 						hue={280}
// 						xOffset={-0.5}
// 						speed={1}
// 						intensity={1}
// 						size={1}
// 					/>
// 				</div>
// 				<div className="w-1/3 h-full absolute top-0 left-0 rotate-180 z-0">
// 					<Lightning
// 						hue={280}
// 						xOffset={-0.5}
// 						speed={1}
// 						intensity={1}
// 						size={1}
// 					/>
// 				</div>
// 			</motion.div>
// 		</main>
// 	)
// }

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
			<div className="relative z-10 flex flex-col items-center pt-2 md:pt-4 xl:pt-26 2xl:pt-6 lg:pt-20">
				{/* Desktop и планшет layout */}
				<div className="hidden md:flex justify-between items-start max-w-screen-2xl mx-auto px-4">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/f-name-logo.png"
						className="w-64 md:w-72 lg:w-80 xl:w-116 2xl:w-96"
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
						className="flex justify-center items-end w-full max-w-screen-xl mx-auto -mr-4 -ml-4 md:-mr-8 md:-ml-8 lg:-mr-12 lg:-ml-12 xl:-mr-16 xl:-ml-16 z-20"
					>
						<img
							src="./public/char.png"
							className="w-48 md:w-56 lg:w-64 xl:w-[370px] 2xl:w-80"
						/>
					</motion.div>
					{/* Last Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/l-name-logo.png"
						className="w-64 md:w-72 lg:w-80 xl:w-116 2xl:w-96"
					/>
				</div>

				{/* Mobile layout */}
				<div className="md:hidden flex flex-col items-center space-y-4 px-4">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/f-name-logo.png"
						className="w-40"
					/>
					{/* Last Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/l-name-logo.png"
						className="w-40"
					/>
					{/* Char - меньше анимации на мобильных */}
					<motion.div
						initial={{ opacity: 0, y: '50vh' }}
						animate={{
							opacity: [0, 1, 1, 1],
							y: ['50vh', '30vh', '30vh', '0vh'],
						}}
						transition={{
							duration: 4,
							times: [0, 0.25, 0.8, 1],
							ease: ['easeIn', 'linear', 'easeOut'],
							delay: 1,
						}}
						className="flex justify-center items-end z-20"
					>
						<img src="./public/char.png" className="w-32" />
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
					className="relative z-10 flex flex-col lg:gap-20 items-center w-full xl:h-full max-w-[320px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] px-4 md:px-0 mt-4 md:mt-[-95px] lg:mt-0"
				>
					{/* Top Ripped - скрыто на мобильных */}
					<img
						src="./public/ripped.png"
						className="hidden md:block w-[90%] lg:w-[95%] xl:w-[1100px] rotate-180 lg:-mt-16"
					/>

					{/* Card Container */}
					<div className="flex items-center w-auto xl:h-full md:gap-1 lg:gap-1 xl:gap-3 md:-mt-20 lg:-mt-24 xl:-mt-26">
						{/* Left Side - скрыто на мобильных */}
						<img
							src="./public/ripped-side.png"
							className="hidden md:block w-[30px] lg:w-[50px] xl:w-[50px] h-auto rotate-180 mt-12 lg:-mt-4 xl:mt-18 -ml-6 lg:-ml-8 xl:-ml-10"
						/>

						{/* Main Card */}
						<div className="relative w-full md:w-[90%] lg:w-[812px] xl:w-[1040px] pb-6 md:pb-8 xl:pb-10 bg-zinc-900 rounded-xl md:rounded-tr-2xl md:rounded-tl-2xl lg:rounded-tr-3xl lg:rounded-tl-3xl xl:rounded-tr-4xl xl:rounded-tl-4xl pt-4 md:pt-5 xl:pt-4 px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center lg:h-[550px] lg:pt-8">
							<Card />
						</div>

						{/* Right Side - скрыто на мобильных */}
						<img
							src="./public/ripped-side.png"
							className="hidden md:block h-[300px] lg:h-[550px] xl:h-[570px] mt-12 lg:-mt-3 xl:mt-20 -mr-3 lg:-mr-4 xl:-mr-8"
						/>

						{/* Skulls - адаптивные позиции */}
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
							src="./public/skull1.png"
							className="absolute z-30 w-16 md:w-24 lg:w-60 xl:w-[280px] -left-2 md:-left-6 lg:-left-20 xl:-left-10 -rotate-12 md:-rotate-20 xl:-rotate-25 bottom-8 md:bottom-12 lg:-bottom-14 xl:bottom-3"
						/>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
							src="./public/skull1.png"
							className="absolute z-30 w-16 md:w-24 lg:w-58 xl:w-[300px] -right-2 md:-right-6 lg:-right-12 xl:-right-10 bottom-8 md:bottom-12 lg:-bottom-13 xl:bottom-2 scale-x-[-1] rotate-12 md:rotate-20 xl:rotate-25"
						/>
					</div>
				</motion.div>
			</div>

			{/* Lightning Background - скрыто на мобильных для производительности */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
				className="hidden md:block absolute inset-0 z-0 h-screen pointer-events-none"
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
		</main>
	)
}
