import React from "react";
import TodoListItem from "./todo-lost-item";

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Eat apple" /></li>
            <li><TodoListItem
                label="Create React App"
                important /></li>
        </ul>
    );
};

export default TodoList;