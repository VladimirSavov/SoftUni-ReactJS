import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: "Go to the gym" }
    ]);

    return (
        <ul>
            {todos.map(x => <TodoItem key={x.id} todo={x} />)}
        </ul>
    );
}