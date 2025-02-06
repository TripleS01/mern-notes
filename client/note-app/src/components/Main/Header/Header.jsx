import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PathTo from '../../../utils/paths';

function Header() {

    return (
        <>
            <div className="header">
                <h2 className="header-title">Your Notes</h2>
                <Link to={PathTo.CreateNote}>
                    <button className="add-note-btn" >
                        <FaPlus /> Add New Note
                    </button>
                </Link>

            </div>
            <div className="line"></div>
        </>
    )
}

export default Header
