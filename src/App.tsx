

import { useState } from 'react'
import './App.css'
import DummyComponent from './DummyProps'



function App() {
	const [number, setNumber] = useState(10)


	return (
		<DummyComponent number={number} setNumber={setNumber} />
	)
}

export default App
