import React, { useState } from "react";
import useCreate from "../../../hooks/useCreate";

function CreateNoteModal({ isOpen, onClose, onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { loading, create } = useCreate();

    async function onCreate(event) {
        event.preventDefault();
        await create(title, description);

    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Create Note</h3>
                <form onSubmit={onCreate}>
                    <input
                        type="text"
                        className="modal-input"
                        placeholder="Enter a title..."
                        value={title}
                        onChange={(event) => { setTitle(event.target.value); }}
                    />
                    <textarea
                        className="modal-input"
                        placeholder="Enter a description..."
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <div className="modal-buttons">
                        <button className="create-btn" onClick={useAddNote}>Create</button>
                        <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateNoteModal;
