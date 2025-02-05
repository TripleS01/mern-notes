import React from 'react'
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

function NoteCard({ title, description }) {
    return (
        <div className="note-card">
            <div>
                <h3 className="note-title">{title}</h3>
                <p className="note-content">{description}</p>
            </div>
            <div className="note-footer">
                <span className="note-date">26.02.2002</span>
                <div className='btns'>
                    <button className="edit btn"><FiEdit2 /></button>
                    <button className="delete btn"><BsTrash3 /></button>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
