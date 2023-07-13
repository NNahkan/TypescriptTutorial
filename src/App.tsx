import React, { useState } from "react"
import './App.css'
import InputField from './components/InputField';


const App: React.FC = () => {

	const [todo, setTodo] = useState("");

	return (
		<div className='App' >
			<span className='heading'>Taskify</span>
			<InputField todo={todo} setTodo={setTodo} />
		</div>
	)
}

export default App

/* 	t role: [number, string];
	
	type Person = {
		name: string;
		age?: number;let hobbies: string[];
	le
	}
	
	let person: Person = {
		name: "ali",
		age: 22,
	}
	
	let lostOfPeople: Person[]; 

let printName: (name: string) => void | never;
let personName: unknown;
*/