import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:7272/server/notes/${id}`)
            .then(response => response.json())
            .then(data => setNote(data))

    }, [id]);


    if (!note) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div>
            <div>
                <h3 className="note-title">{note.title}</h3>
                <p className="note-content">{note.description}</p>
            </div>
            <div className="note-footer">
                <div className='btns'>
                    <button className="edit btn"><FiEdit2 /></button>
                    <button className="delete btn"><BsTrash3 /></button>
                </div>
            </div>
        </div>
    )
}

export default NotePage
