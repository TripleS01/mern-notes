import React from "react";

import NoteCard from "../Note/NoteCard/NoteCard";
import Header from "../Header/Header";

function Dashboard() {
    const notes = [
        { title: "Note 1", content: "This is the first note." },
        { title: "Note 2", content: "This is the second note." },
        { title: "Note 3", content: "This is the third note." },
        { title: "Note 4", content: "This is the fourth note." },
        { title: "Note 5", content: "This is the fifth note." },
    ];

    return (
        <>
            <Header />

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
