import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('api/todos')
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    const addTodo = async (name, date, priority) => {
        const response = await fetch('api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, date, priority })
        });

        if (response.ok) {
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        }
    };

    const deleteTodo = async (id) => {
        await fetch(`api/todos/${id}`, {
            method: 'DELETE'
        });

        setTodos(todos.filter(todo => todo.id !== id));
    };

    // ... (компоненти, сортування та стилізація)

    return (
        <div>
            <h1>Список завдань</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.name} ({todo.date}) - {todo.priority}
                        <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
            <AddTodoForm onAddTodo={addTodo} />
        </div>
    );
};

export default TodoList;
