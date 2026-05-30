import { Router } from "express";
import upload from "../midlleware/multer.js";
import { uploadDocument } from "../controllers/upload.controller.js";

const router = Router();

router.post("/uploadDocument", upload.single("file"), uploadDocument);

export default router;
