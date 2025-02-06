import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import PathTo from '../../../utils/paths';
import { format } from 'date-fns';

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
        <div className='page-overlay'>
            <div>
                <h3 className="note-title-np">{note.title}</h3>
                <p className="note-content-np">{note.description}</p>
            </div>
            <div className="note-footer">
                <div className="note-footer-np">
                    <span className="note-date"> {format(new Date(note.createdAt), 'HH:mm dd.MM.yyyy')}</span>
                </div>
                <div className='btns'>
                    <Link to={PathTo.EditNote}>
                        <button className="edit btn">
                            <FiEdit2 />
                        </button>
                    </Link>
                    <button className="delete btn" onClick={onDelete}>
                        <BsTrash3 />
                    </button>
                    <Link to={PathTo.Dashboard}>
                        <button className="back btn">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotePage
