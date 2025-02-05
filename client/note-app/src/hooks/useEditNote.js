import { useState } from 'react';
import toast from 'react-hot-toast';

export default function useEdit() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function edit(id, title, description) {
            setLoading(true);

            try {
                const response = await fetch("http://localhost:7272/server/notes/${id}", {
                    method: "PUT",
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

    }, [id,]);

    return { loading, edit };
};

function handleInputErrors(title) {
    if (!title) {
        toast.error('Title is required!');
        return false;
    }

    return true;
};