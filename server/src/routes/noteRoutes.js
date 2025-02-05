import express from "express";
import {
    createNote,
    updateNote,
    deleteNote,
    getNotes,
    getNote,
} from "../controllers/NoteController.js";

const router = express.Router();

router.post("/note/create", createNote);
router.patch("/note/:id", updateNote);
router.delete("/note/:id", deleteNote);
router.get("/notes", getNotes);

export default router;