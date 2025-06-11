import type { FC } from 'react'
import { motion } from 'framer-motion'
// import { Card } from '../components/card'
// import Lightning from '../motion/Backgrounds/Lightning/Lightning'

export const MainPage: FC = () => {
	return (
		<main
			className="min-h-screen overflow-hidden bg-black"
			style={{ userSelect: 'none' }}
		>
			<div className="relative z-10 flex flex-col items-center pt-8">
				<div className="flex justify-between items-start max-w-screen-xl mx-auto">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/f-name-logo.png"
						className="w-104"
					/>
					{/* Char */}
					<motion.div
						initial={{ opacity: 0, y: '100vh' }}
						animate={{
							opacity: [0, 1, 1, 1],
							y: ['100vh', '60vh', '60vh', '0vh'],
						}}
						transition={{
							duration: 6,
							times: [0, 0.25, 0.8, 1],
							ease: ['easeIn', 'linear', 'easeOut'],
							delay: 1,
						}}
						className="flex justify-center items-end w-full max-w-screen-md mx-auto -mr-20 -ml-20 z-20"
					>
						<img src="./public/char.png" className="w-[400px]" />
					</motion.div>
					{/* Last Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/l-name-logo.png"
						className="w-104"
					/>
				</div>
				{/* Text */}
				<motion.div
					initial={{ opacity: 0, y: '100vh' }}
					animate={{
						opacity: [0, 1, 1, 1],
						y: ['100vh', '60vh', '60vh', '0vh'],
					}}
					transition={{
						duration: 6,
						times: [0, 0.25, 0.8, 1],
						delay: 1,
						ease: ['easeIn', 'linear', 'easeOut'],
					}}
					className="relative z-10 mt-[-90px] flex flex-col items-center"
				>
					{/* Top Ripped */}
					<img src="./public/ripped.png" className="w-[1100px] rotate-180" />
					{/* Card */}
					<div className="relative bg-zinc-900 w-[1000px] h-124 rounded-tr-4xl rounded-tl-4xl pt-10 py-12 flex justify-center">
						{/* <Card /> */}
					</div>

					{/* Side ripped */}
					<div className="relative w-[1100px] h-max flex justify-between -mt-4">
						<img
							src="./public/ripped.png"
							className="w-[570px] rotate-90 -ml-24"
						/>
						<img
							src="./public/ripped.png"
							className="w-[570px] rotate-270 -mr-24"
						/>
					</div>
				</motion.div>
			</div>
			{/* <motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
				src="./public/skull1.png"
				className="absolute z-20 w-[200px] -bottom-13 left-84 -rotate-13"
			/>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
				src="./public/skull1.png"
				className="absolute z-20 w-[200px] -bottom-13 right-84 scale-x-[-1] rotate-13"
			/> */}
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
				className="z-0"
			>
				<div className="w-1/3 h-[950px] absolute top-0 right-0 z-0">
					<Lightning
						hue={280}
						xOffset={-0.5}
						speed={1}
						intensity={1}
						size={1}
					/>
				</div>
				<div className="w-1/3 h-[950px] absolute top-0 left-0 rotate-180 z-0">
					<Lightning
						hue={280}
						xOffset={-0.5}
						speed={1}
						intensity={1}
						size={1}
					/>
				</div>
			</motion.div> */}
		</main>
	)
}
