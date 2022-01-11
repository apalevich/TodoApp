import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item-panel/add-item-panel";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            buttons: [
                this.createFilterButton('All', true),
                this.createFilterButton('Active', false),
                this.createFilterButton('Done', false)
            ],
            query: ''
        }
    }

    maxId = 100;

    createFilterButton = (label, active) => {
        return {
            label,
            active,
            id: this.maxId++
        }
    }

    createTodoItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
            visible: true
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

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    onSearch = (query) => {
        this.setState(({ todoData }) => {
            const newArr = [...todoData];
            
            newArr.forEach((item) => {
                item.visible = item.label.toLowerCase().includes(query.toLowerCase()) ? true : false
            })
            
            return {
                todoData: newArr,
                query
            }
        })
    }

    onToggleFilter = (id) => {      
        this.setState(({ buttons, todoData }) => {
            const butArr = [...buttons];
            const idx = butArr.findIndex((el) => el.id === id);
            const newButArr = butArr.map((el, index) => {
                return {
                    ...el,
                    active: (index === idx ? true : false)
                }
            })

            const filterValue = butArr[idx].label;
            const todoArr = [...todoData];
            switch (filterValue) {
                case 'All':
                    todoArr.forEach((item) => {item.visible = true});
                    break;
                case 'Done':
                    todoArr.forEach((item) => {item.visible = item.done});
                    break;
                case 'Active':
                    todoArr.forEach((item) => {item.visible = item.important});
                    break
            }

            return {
                buttons: newButArr,
                todoData: todoArr,
                query: ''
            }
        })
    }
    
    render() {
        const { todoData, buttons } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader
                    toDo={ todoCount }
                    done={ doneCount }
                />
                <div className="top-panel d-flex mt-3">
                    <SearchPanel
                        onChange={ this.onSearch }
                        value={ this.state.query }    
                    />
                    <ItemStatusFilter
                        buttons={ buttons }
                        onClick={ this.onToggleFilter }
                    />
                </div>
                <TodoList
                    todos={todoData}
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