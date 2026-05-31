import { Router } from "express";
import { client } from "../config/chromadb.js";

const router = Router();

// GET /api/debug/collections — list all collections
router.get("/collections", async (req, res) => {
  try {
    const collections = await client.listCollections();
    res.json({ collections });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/debug/peek — peek at documents in my_collection
router.get("/peek", async (req, res) => {
  try {
    const collection = await client.getCollection({ name: "my_collection" });
    const count = await collection.count();
    const peek = await collection.peek({ limit: 5 }); // first 5 docs
    res.json({ count, documents: peek });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/debug/count — just the document count
router.get("/count", async (req, res) => {
  try {
    const collection = await client.getCollection({ name: "my_collection" });
    const count = await collection.count();
    res.json({ collection: "my_collection", count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
