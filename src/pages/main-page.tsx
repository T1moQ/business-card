import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/card'
// import Lightning from '../motion/Backgrounds/Lightning/Lightning'

export const MainPage: FC = () => {
	return (
		<main className="min-h-screen overflow-hidden bg-black relative">
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 0.5, ease: 'easeIn' }}
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
			<motion.img
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1.1 }}
				transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
				src="./public/char.png"
				className="absolute inset-x-0 m-auto top-8 w-[400px] z-30"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 3.5, ease: 'easeInOut' }}
				className="absolute inset-x-0 m-auto top-[360px] w-[1100px] h-[560px] rounded-tl-4xl rounded-tr-4xl overflow-visible"
			>
				<img
					src="./public/ripped.png"
					className="absolute w-[1100px] rotate-180 -top-11"
				/>
				<img
					src="./public/ripped.png"
					className="absolute w-[570px] rotate-90 top-68 -left-72"
				/>
				<img
					src="./public/ripped.png"
					className="absolute w-[570px] rotate-270 top-72 -right-71"
				/>
			</motion.div>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 3.5, ease: 'easeInOut' }}
				src="./public/f-name-logo.png"
				className="w-104 absolute top-10 left-104"
			/>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 3.5, ease: 'easeInOut' }}
				src="./public/l-name-logo.png"
				className="w-104 absolute top-10 right-106"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 3.5, ease: 'easeInOut' }}
				className="absolute bg-zinc-900 w-[1000px] h-124 rounded-tr-4xl rounded-tl-4xl bottom-0 left-1/2 -translate-x-1/2 pt-10 py-12"
			>
				<Card />
			</motion.div>
		</main>
	)
}
