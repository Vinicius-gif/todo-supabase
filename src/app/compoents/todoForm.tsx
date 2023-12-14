'use client'

import { ItodoProps } from '@/supabase/ItodoProps';
import { addTodo } from '@/supabase/todoList';
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { useTodos } from '../hooks/useTodos';

const TodoForm = () => {
    const [todo, setTodo] = React.useState<ItodoProps>({task: '', id: ''});
    const { todos, setTodos }= useTodos();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newId = uuidv4();
        setTodo({ task: e.target.value, id: newId });
    };

    const handleSubmitTodo = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await addTodo(todo.task);
            setTodos([...todos, todo])

            if (!response) {
                console.error();
            }
            return;
        } catch (error) {
            console.error("Error ao cadastrar tarefa:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitTodo}>
                <input
                type="text"
                required
                value={todo.task}
                onChange={handleInputChange}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
)
}

export default TodoForm