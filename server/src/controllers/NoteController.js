import noteModel from "../models/noteModel.js";

export const createNote = async (request, response) => {

    try {
        const { title, description } = request.body;

        if (!title || title.trim() === "") {
            return response.status(400).json({ message: "Title is required!" });
        }

        const newNote = new noteModel({
            title,
            description,
        });

        await newNote.save();

        response.status(201).json(newNote);

    } catch (error) {
        console.log("Error in createNote controller: ", error.message);
        response.status(500).json({ message: error.message });
    }
};

export const getNotes = async (request, response) => {

    try {
        const notes = await noteModel.find();

        response.status(200).json(notes);

    } catch (error) {
        console.log("Error in getNotes controller: ", error.message);
        response.status(500).json({ message: error.message });
    }
};

export const updateNote = async (request, response) => {

    try {
        const { id } = request.params;
        const { title, description } = request.body;

        if (!id) {
            return response.status(400).json({ message: "Please provide a note id" });
        }

        const note = await noteModel.findById(id);

        if (!note) {
            return response.status(404).json({ message: "Note not found!" });
        }

        note.title = title || note.title;
        note.description = description || note.description;

        await note.save();

        return response.status(200).json(note);

    } catch (error) {
        console.log("Error in updateNote controller: ", error.message);
        response.status(500).json({ message: error.message });
    }
};

export const deleteNote = async (request, response) => {

    try {
        const { id } = request.params;

        const note = await noteModel.findById(id);

        if (!note) {
            return response.status(404).json({ message: "Note not found!" });
        }

        await noteModel.findByIdAndDelete(id);

        return response.status(200).json({ message: "Note deleted successfully!" });

    } catch (error) {
        console.log("Error in deleteNote controller: ", error.message);
        response.status(500).json({ message: error.message });
    }
};