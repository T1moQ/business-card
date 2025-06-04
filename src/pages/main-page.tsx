import type { FC } from 'react'
import { motion } from 'framer-motion'
import { Hero } from '../components/hero'

export const MainPage: FC = () => {
	return (
		<main className="min-h-screen overflow-hidden bg-gray-100 relative flex items-center justify-center">
			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="absolute bottom-0 left-0 w-full h-full z-0"
				style={{
					background:
						'linear-gradient(180deg, rgba(124, 41, 85, 1) 0%, rgba(198, 88, 55, 1) 46%, rgba(213, 70, 54, 1) 53%, rgba(184, 28, 68, 1) 100%)',
				}}
			/>

			{/* 2. Персонаж */}
			<motion.img
				src="/public/char.png"
				alt="Персонаж"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2, duration: 2 }}
				className="w-[440px] z-10 "
			/>

			{/* 3. Афиша */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8, y: 50 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ delay: 3, duration: 2.5 }}
				className="absolute right-96 top-96 bg-white p-6 border-2 border-black shadow-xl z-20 max-w-sm "
			>
				<Hero />
			</motion.div>
		</main>
	)
}
