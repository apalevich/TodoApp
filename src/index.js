import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build awesome app</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>Todo App</h1>
}

const SearchPanel = () => {
    return (
        <input placeholder="search" />
    )
}

const App = () => {
    const Test = <span>Test</span>;
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}
console.log(<App />)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);