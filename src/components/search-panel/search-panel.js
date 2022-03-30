import React from "react";
import "./search-panel.css";

const SearchPanel = ({ onChange, value }) => {
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