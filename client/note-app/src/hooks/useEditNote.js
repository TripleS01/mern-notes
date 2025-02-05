import { useState } from 'react';
import toast from 'react-hot-toast';

export default function useEdit() {
    const [loading, setLoading] = useState(false);

    async function edit(id, title, description) {
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:7272/server/notes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Note updated successfully!");
            } else {
                toast.error(data.message || "Failed to update note.");
            }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, edit };
};
