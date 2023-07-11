

import './App.css'


const App: React.FC = () => {
	let role: [number, string];

	type Person = {
		name: string;
		age?: number;
	}
	return (
		<div className='App' >
			<span className='heading'>Taskify</span>
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