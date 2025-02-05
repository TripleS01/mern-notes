import { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useGetNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getNotes() {
            try {
                const response = await fetch("http://localhost:7272/server/notes");

                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                };
                setNotes(data);

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getNotes();
    }, []);

    return { notes, loading };
};

export default useGetNotes;
