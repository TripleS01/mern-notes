import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

import CreateNoteModal from '../Note/NoteModals-Create-Edit/CreateNoteModal';

function Header({ onAddNote }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="header">
            <h2 className="header-title">Your Notes</h2>
            <button className="add-note-btn" onClick={() => setIsModalOpen(true)}>
                <FaPlus /> Add New Note
            </button>

            <CreateNoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddNote={onAddNote}
            />
        </div>
    )
}

export default Header
