import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import PathTo from '../../../utils/paths';

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:7272/server/notes/${id}`)
            .then(response => response.json())
            .then(data => setNote(data))

    }, [id]);

    if (!note) {
        return <div className="loading">Loading...</div>;
    }

    async function onDelete(event) {
        event.preventDefault();

        const response = await fetch(`http://localhost:7272/server/notes/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to delete note");
        }

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={PathTo.Dashboard} />;
    }

    return (
        <div>
            <div>
                <h3 className="note-title">{note.title}</h3>
                <p className="note-content">{note.description}</p>
            </div>
            <div className="note-footer">
                <div className='btns'>
                    <button className="edit btn">
                        <FiEdit2 />
                    </button>
                    <button className="delete btn" onClick={onDelete}>
                        <BsTrash3 />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotePage
