import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Header() {
    return (
        <div className="header">
            <h2 className="header-title">Your Notes</h2>
            <button className="add-note-btn">
                <FaPlus /> Add New Note
            </button>
        </div>
    )
}

export default Header
