import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useEditNote from "../../../hooks/useEditNote.js";

function EditNoteModal({ isOpen, isClose }) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { loading, edit } = useEditNote();

    useEffect(() => {
        if (!isOpen) return;

        async function fetchNote() {
            const response = await fetch(`http://localhost:7272/server/notes/${id}`);
            const data = await response.json();
            setNote(data);
        }

        fetchNote();
    }, [id, isOpen]);

    async function onEdit(event) {
        event.preventDefault();
        await edit(id, title, description);
        onClose();
    }

    function onClose() {
        isClose();
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Edit Note</h3>
                <form onSubmit={onEdit}>
                    <input
                        type="text"
                        className="modal-input"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <textarea
                        className="modal-input"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <button type="submit" className="create-btn" disabled={loading}>
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
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

export default EditNoteModal;
