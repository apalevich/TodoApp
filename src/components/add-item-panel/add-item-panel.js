import React from "react";

import "./add-item-panel.css"

const AddItem = (props) => {
    return (
        <div className="add-item-container">
            <input
                className="add-item-container__input"
                type="text"
                placeholder="New task"
            >
            </input>
            <button
                type="button"
                className="btn btn-outline-secondary add-item-container__button"
                onClick={ () => props.onItemAdded('item') }
            >
                Add
            </button>
        </div>
    )
}

export default AddItem;