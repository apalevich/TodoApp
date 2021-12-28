import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import AddItem from "../add-item-panel/add-item-panel";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
              ]
        }
    }

    maxId = 100;

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({ todoData })=>{
            const newArr = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        })
    };

    onToggleImportant = (id) => {
        console.log('Important ' + id)
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };
            const newArr = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ];
            return {
                todoData: newArr
            }
        })
    } ;
    
    render() {
        return (<div className="todo-app">
            <AppHeader toDo={-1} done={-1} />
            <div className="top-panel d-flex">
                <SearchPanel />
            </div>
            <TodoList
                todos={this.state.todoData}
                onDeleted={ this.deleteItem }
                onToggleImportant={ this.onToggleImportant }
                onToggleDone={ this.onToggleDone }
            />
            <AddItem
                onItemAdded={ this.addItem }
            />
        </div>
        )
    };
};