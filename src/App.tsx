"use client"

import { useState } from 'react'
import './App.css'

function App() {
	const [postTitle, setPostTitle] = useState("")

	const changeTitle = () => {
		setPostTitle(35)
	}

	return (
		<>
			<h1 style={{ color: "black", background: "white" }}>x{postTitle}</h1>
		</>
	)
}

export default App
