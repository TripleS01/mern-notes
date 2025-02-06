import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PathTo from "../../../utils/paths";

function EditNote() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function onEdit(event) {
        event.preventDefault();

    }


    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Edit Note</h3>
                <form onSubmit={onEdit}>
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
                    <button type="submit" className="save-btn">
                        Save Changes
                    </button>
                    <div className="cancel-div">
                        <Link to={PathTo.Dashboard}>
                            <button type="button" className="cancel-btn">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditNote;
