import React from 'react';
import extractTime from '../../../utils/extractTime.js';
import PathTo from '../../../utils/paths.js';
import { Link } from 'react-router-dom';

function NoteCard({ _id, title, createdAt, description }) {
    const formattedTime = extractTime(createdAt);

    return (
        <div className="note-card">
            <div>
                <Link to={PathTo.Notes + `/${_id}`}>
                    <h3 className="note-title">{title}</h3>
                </Link>
                <p className="note-content">{description}</p>
            </div>
            <div className="note-footer">
                <span className="note-date">{formattedTime}</span>
            </div>
        </div>
    );
}

export default NoteCard;
