import React, { useState } from "react";
import useCreate from "../../../hooks/useCreateNote.js";

function CreateNoteModal({ isOpen, isClose, onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { loading, create } = useCreate();

    async function onCreate(event) {
        event.preventDefault();
        await create(title, description, onAddNote);
        onClose();
    }

    function onClose() {
        setTitle("");
        setDescription("");
        isClose();
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Create Note</h3>
                <form onSubmit={onCreate}>
                    <div>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="Enter a title..."
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <textarea
                            className="modal-input"
                            placeholder="Enter a description..."
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <button type="submit" className="create-btn" disabled={loading}>
                            {loading ? "Creating..." : "Create"}
                        </button>
                    </div>

                    <div className="cancel-div">
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateNoteModal;
