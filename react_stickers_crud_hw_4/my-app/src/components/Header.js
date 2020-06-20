import React from 'react'

function Header({ onAddBtnClick }) {
    return (
        <div className="header">
            <h1>Sticker`s Board</h1>
            <button 
               className="add-btn"
               onClick={onAddBtnClick}>Add New Sticker
            </button>
        </div>
    );
}

export default Header;
