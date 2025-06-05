import type { FC } from 'react'
import { motion } from 'framer-motion'
import Lightning from '../motion/Backgrounds/Lightning/Lightning'

export const MainPage: FC = () => {
	return (
		<main className="min-h-screen overflow-hidden bg-gray-100 relative">
			<div className="w-1/2 h-[950px] absolute top-0 right-0 z-0">
				<Lightning hue={280} xOffset={0} speed={1} intensity={0.5} size={0.5} />
			</div>
			<div className="w-1/2 h-[950px] absolute top-0 left-0 rotate-180 z-0">
				<Lightning hue={280} xOffset={0} speed={1} intensity={0.5} size={0.5} />
			</div>
			<motion.img
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1.1 }}
				transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
				src="./public/char.png"
				className="absolute inset-x-0 m-auto top-8 w-[400px]"
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
				className="w-1/2 h-[950px] absolute top-0 right-0 z-0"
			></motion.div>
		</main>
	)
}
