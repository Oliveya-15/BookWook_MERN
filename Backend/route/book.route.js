import express from "express";
import { getBook, getBookById } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", getBookById); // New route to get book details by ID

export default router;

