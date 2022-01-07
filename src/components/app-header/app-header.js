import React from "react";
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header d-flex mt-4">
            <h1>Todo App</h1>
            <h2>{toDo} to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;