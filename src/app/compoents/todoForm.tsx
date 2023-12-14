'use client'

import { addTodo } from '@/supabase/todoList';
import React from 'react'

const TodoForm = () => {
    const [todo, setTodo] = React.useState("");

    return (
        <div>
            <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => addTodo(todo)}>Add Todo</button>
        </div>
)
}

export default TodoForm