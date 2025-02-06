import React, { useEffect, useState } from "react";
import NoteCard from "../../components/Note/NoteCard/NoteCard.jsx";

function Dashboard() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = () => {
        fetch("http://localhost:7272/server/notes")
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch notes");
                return response.json();
            })
            .then(data => setNotes(data))
            .catch(error => console.error("Error fetching notes:", error));
    };

    return (
        <>
            <div className="notes-grid">
                {notes.map((note, index) => (
                    <NoteCard
                        key={note._id || index}
                        _id={note._id}
                        title={note.title}
                        createdAt={note.createdAt}
                        description={note.description}
                    />
                ))}
            </div>

        </>
    );
}

export default Dashboard;
