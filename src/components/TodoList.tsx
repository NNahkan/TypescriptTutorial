import React from 'react'
import "./styles.css"
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC = ({ todos, setTodos }: Props) => {
	return (
		<div className="container">
			<div className="todos">
				<span className="todos__heading">
					Active Tasks
				</span>
				{todos.map(todo => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos} />
				))}
			</div>
			<div className="todos remove">
				<span className="todos__heading">
					Completed Tasks
				</span>
				{todos.map(todo => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos} />
				))}</div>
		</div>
	)
}

export default TodoList
