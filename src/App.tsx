

import './App.css'
import DummyComponent from './DummyProps'



function App() {
	const setNumber = () => console.log("works")


	return (
		<DummyComponent number={10} setNumber={setNumber} />
	)
}

export default App
