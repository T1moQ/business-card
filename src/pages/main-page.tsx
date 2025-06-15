import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/card'
import Lightning from '../motion/Backgrounds/Lightning/Lightning'

export const MainPage: FC = () => {
	return (
		<main
			className="h-screen overflow-hidden bg-black"
			style={{ userSelect: 'none' }}
		>
			<div className="relative z-10 flex flex-col items-center pt-8 origin-top scale-[0.75]">
				<div className="flex justify-between items-start max-w-screen-xl mx-auto">
					{/* Name */}
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 6.5, ease: 'easeInOut' }}
						src="./public/f-name-logo.png"
						className="w-124"
					/>
					{/* Char */}
					<motion.div
						initial={{ opacity: 0, y: '100vh' }}
						animate={{
							opacity: [0, 1, 1, 1],
							y: ['100vh', '80vh', '80vh', '0vh'],
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
						className="w-124"
					/>
				</div>
				{/* Text */}
				<motion.div
					initial={{ opacity: 0, y: '100vh' }}
					animate={{
						opacity: [0, 1, 1, 1],
						y: ['100vh', '80vh', '80vh', '0vh'],
					}}
					transition={{
						duration: 6,
						times: [0, 0.25, 0.8, 1],
						delay: 1,
						ease: ['easeIn', 'linear', 'easeOut'],
					}}
					className="relative z-10 mt-[-95px] flex flex-col items-center w-[1200px]"
				>
					{/* Top Ripped */}
					<img src="./public/ripped.png" className="w-[1100px] rotate-180" />
					{/* Card */}
					<div className="flex items-center gap-8 -mt-7">
						<img
							src="./public/ripped-side.png"
							className="w-[50px] h-auto rotate-180 -mt-2"
						/>
						<div className="relative w-[1000px] bg-zinc-900 h-130 rounded-tr-4xl rounded-tl-4xl pt-10 px-12 flex justify-center">
							<Card />
						</div>
						<img
							src="./public/ripped-side.png"
							className="h-[570px] mt-3 mr-2"
						/>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
							src="./public/skull1.png"
							className="absolute z-30 w-[270px] -left-12 -rotate-25 -bottom-15"
						/>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 3, delay: 8, ease: 'easeIn' }}
							src="./public/skull1.png"
							className="absolute z-30 w-[250px] -right-12 -bottom-12 scale-x-[-1] rotate-25"
						/>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 9, ease: 'easeIn' }}
				className="absolute inset-0 z-0 h-screen pointer-events-none"
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
