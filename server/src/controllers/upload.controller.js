import { generateEmbedding } from "../services/embedding.js";
import { loadDocument } from "../services/loader.js";

export const uploadDocument = async (req, res) => {
  try {
    const file = req.file;

    const data = await loadDocument(file);

    const embedd = await generateEmbedding(data);

    res.status(200).json({ message: "Document Upload SuccessFully" });
  } catch (error) {
    console.error("Upload error : ", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};
