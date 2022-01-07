import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

import "./add-item-panel.css"

export default class AddItem extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });

    }

    // TODO: Фильтр поиска
    // TODO: Фильтры

    render() {
        return (
            <form
                className="item-add-form d-flex mt-3"
                onSubmit={ this.onSubmit }
            >

                <input
                    className="form-control"
                    type="text"
                    onChange={ this.onLabelChange }
                    placeholder="New task"
                    value={ this.state.label }
                />
                <button
                    className="btn btn-outline-secondary"
                >
                    Add Item
                </button>
            </form>
        )
    }
}