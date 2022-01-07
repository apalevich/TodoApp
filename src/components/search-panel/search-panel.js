import React from "react";
import { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState((state) => {
            return {label: e.target.value}
        }, () => {
            this.props.onChange(this.state.label);
        });
        
    }

    render() {   
        return (
            <input  type="text"
                    className="form-control search-input"
                    onChange={this.onLabelChange}
                    placeholder="Search"
                    value={this.state.label}
            />
        );
    }
};

