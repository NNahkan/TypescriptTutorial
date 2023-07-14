import React from 'react'
import "./styles.css"

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	return (
		<form className='input' onSubmit={handleAdd}>
			{/* bem convention */}
			<input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a Task' className='input__box' />
			<button className='input_submit'>Go</button>
		</form>
	)
}

export default InputField
