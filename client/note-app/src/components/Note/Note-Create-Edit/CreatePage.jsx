import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import PathTo from "../../../utils/paths";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(false);


    async function onCreate(event) {
        event.preventDefault();

        if (!title) {
            setErrorMessage('Title is required');
            return;
        }

        const dataForm = new FormData();
        dataForm.set('title', title);
        dataForm.set('description', description);

        const response = await fetch("http://localhost:7272/server/note/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description }),
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
                        <button type="submit" className="create-btn" >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateNote;
