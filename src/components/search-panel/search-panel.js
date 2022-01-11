import React from "react";
import { Component } from "react";
import "./search-panel.css";

const SearchPanel = ({ onChange, value }) => {

    // onLabelChange = (e) => {
    //     this.setState((state) => {
    //         return {label: e.target.value}
    //     }, () => {
    //         this.props.onChange(this.state.label);
    //     });
        
    // }

    return (
        <input  type="text"
                className="form-control search-input"
                onChange={ (e) => onChange(e.target.value) }
                placeholder="Search"
                value={ value }
        />
    );

};

export default SearchPanel;