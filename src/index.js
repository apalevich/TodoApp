import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);