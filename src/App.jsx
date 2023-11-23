import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas - Grupo 4 - Comisión 133</h1>
				<div className='counter-todos'>
					<h3>
						Cantidad de Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar tarea a la lista</h3>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
		</>
	);
}

export default App;
