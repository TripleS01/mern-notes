import React from 'react'
import { format } from 'date-fns';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await fetch(`http://localhost:7272/note/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch note');
                }
                const data = await response.json();
                if (!data) throw new Error('Note not found'); 
                setNote(data);
            } catch (error) {
                console.error("Error fetching note:", error);
                setNote({ error: true }); 
            }
        };

        fetchNote();
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
