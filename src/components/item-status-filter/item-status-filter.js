import React, { Component } from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ buttons, onClick }) => {
  return (
    <div className="btn-group">
      {
        buttons.map(button => {
          return (
            <button type="button"
                    key={button.id}
                    className={ "btn " + (button.active ? "btn-info" : "btn-outline-secondary") }
                    onClick={ () => onClick(button.id) }>
                      { button.label }
            </button>
          )
        })
      }
    </div>
  );
}

export default ItemStatusFilter;