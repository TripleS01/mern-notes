import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PathTo from "../../../utils/paths";

function EditNote() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:7272/server/notes/${id}`)
            .then(response => response.json())
            .then(dataNote => {
                setTitle(dataNote.title);
                setDescription(dataNote.description);
            })

    }, [id]);

    async function onEdit(event) {
        event.preventDefault();

        if (!title) {
            setErrorMessage('Title is required');
            return;
        }

        const dataForm = new FormData();
        dataForm.set('title', title);
        dataForm.set('description', description);
        dataForm.set('id', id);

        const response = await fetch('http://localhost:7272/server/notes/edit', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, id }),
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={PathTo.Dashboard} />;
    }

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
                    <button type="submit" className="save-btn">
                        Save Changes
                    </button>
                    <div className="cancel-div">
                        <Link to={PathTo.Dashboard}>
                            <button type="button" className="cancel-btn">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditNote;
