import { useState } from 'react';
import toast from 'react-hot-toast';

export default function useCreate() {
    const [loading, setLoading] = useState(false);

    async function create(title, description) {
        const success = handleInputErrors(title, description);
        if (!success) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:7272/server/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            const data = await response.json();

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