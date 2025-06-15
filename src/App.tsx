import './App.css'
import { useEffect, useState } from 'react'
import Crosshair from './motion/Animations/Crosshair/Crosshair'
import { MainPage } from './pages/main-page'

function App() {
	const [showCursor, setShowCursor] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowCursor(true)
		}, 9000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="cursor-none">
			{showCursor && <Crosshair color="#00ff2a" />}
			<MainPage />
		</div>
	)
}
export default App
