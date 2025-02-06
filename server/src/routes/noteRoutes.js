import express from "express";
import {
    createNote,
    updateNote,
    deleteNote,
    getNotes,
    getNote,
} from "../controllers/NoteController.js";

const router = express.Router();

router.post("/notes/create", createNote);
router.get("/notes", getNotes);
router.get("/notes/:id", getNote);
router.put("/notes/edit", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;