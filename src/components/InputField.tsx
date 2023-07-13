import React from 'react'
import "./styles.css"

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
	return (
		<form className='input' action="">
			{/* bem convention */}
			<input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a Task' className='input__box' />
			<button className='input_submit'>Go</button>
		</form>
	)
}

export default InputField
