import { ChromaClient } from "chromadb";

// Local Docker Chroma client — run with: docker run -p 8000:8000 chromadb/chroma
export const client = new ChromaClient({
  path: "http://localhost:8000",
});
