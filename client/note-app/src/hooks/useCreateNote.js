import { useState } from 'react';
import toast from 'react-hot-toast';

export default function useCreate() {
    const [loading, setLoading] = useState(false);

    async function create(title, description) {
        const success = handleInputErrors(title, description, onAddNote);
        if (!success) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:7272/server/note/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Note created successfully!");
                onAddNote(data);
            } else {
                toast.error(data.message || "Failed to create note.");
            }

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    };

    return { loading, create };
};

function handleInputErrors(title) {
    if (!title) {
        toast.error('Title is required!');
        return false;
    }

    return true;
};