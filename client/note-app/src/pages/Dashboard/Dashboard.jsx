import React, { useState } from "react";

import NoteCard from "../../components/Note/NoteCard/NoteCard";
import Header from "../../components/Header/Header";
import useGetNotes from "../../hooks/useGetNotes.js";

function Dashboard() {
    const { notes, loading } = useGetNotes();

    const onAddNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    if (loading) return <p>Loading notes...</p>;

    return (
        <>
            <Header onAddNote={onAddNote} />

            <div className="line"></div>

            <div className="notes-grid">
                {notes.map((note, index) => (
                    <NoteCard key={index} title={note.title} description={note.description} />
                ))}
            </div>
        </>
    );
}

export default Dashboard
