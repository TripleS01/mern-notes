import React, { useState } from "react";

import NoteCard from "../../components/Note/NoteCard/NoteCard";
import Header from "../../components/Header/Header";

function Dashboard() {
    const [notes, setNotes] = useState([
        { title: "Note 1", content: "This is the first note." },
        { title: "Note 2", content: "This is the second note." },
        { title: "Note 3", content: "This is the third note." },
        { title: "Note 4", content: "This is the fourth note." },
    ]);

    const handleAddNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    return (
        <>
            <Header onAddNote={handleAddNote} />

            <div className="line"></div>

            <div className="notes-grid">
                {notes.map((note, index) => (
                    <NoteCard key={index} title={note.title} content={note.content} />
                ))}
            </div>
        </>
    );
}

export default Dashboard
