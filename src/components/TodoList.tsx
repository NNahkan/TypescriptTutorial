import React from 'react'
import "./styles.css"
import { Todo } from '../model';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC = ({ todos, setTodos }: Props) => {
	return (
		<div className='todos'>
			{todos.map(todo => (
				<li>{todo.todo}</li>
			))}
		</div>
	)
}

export default TodoList
