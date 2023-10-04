import { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {
    let [count, setCount] = useState(0);

    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem>{count}</TodoListItem>
            </ul>

            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
};

export default TodoList;