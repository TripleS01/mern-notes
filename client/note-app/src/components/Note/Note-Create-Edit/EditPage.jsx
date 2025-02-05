import React, { useEffect, useState } from "react";
import useEditNote from "../../../hooks/useEditNote.js";
import { useParams } from "react-router-dom";

function EditNote({ note }) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { loading, edit } = useEditNote();

    // useEffect(() => {
    //     fetch(`http://localhost:7272/server/notes/${id}`)
    //         .then(response => response.json())
    //         .then(dataPost => {
    //             setTitle(dataPost.title);
    //             setDescription(dataPost.description);
    //         })
    //         .catch(error => console.error('Error fetching post:', error));

    // }, [id]);


    // async function onEdit(event) {
    //     event.preventDefault();

    //     if (!title) {
    //         setErrorMessage('Title is required');
    //         return;
    //     }

    //     const dataForm = new FormData();
    //     dataForm.set('title', title);
    //     dataForm.set('description', description);
    //     dataForm.set('id', id);

    //     const response = await fetch('http://localhost:5757/notes', {
    //         method: 'PUT',
    //         body: dataForm,
    //         credentials: 'include',
    //     });

    //     if (response.ok) {
    //         setRedirect(true);
    //     }
    // }


    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Edit Note</h3>
                <form >
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
                        <button type="button" className="cancel-btn" >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditNote;
