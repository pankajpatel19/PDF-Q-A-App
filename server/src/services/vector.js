import { Chroma } from "@langchain/community/vectorstores/chroma";

// Chroma only accepts string, number, boolean, or null as metadata values
function sanitizeMetadata(metadata) {
  const clean = {};
  for (const [key, value] of Object.entries(metadata ?? {})) {
    if (
      value === null ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      clean[key] = value;
    }
    // Skip nested objects/arrays (e.g. the 'pdf' object from PDFLoader)
  }
  return clean;
}
export async function storeEmbedds(chunks, embedder) {
  // Sanitize metadata on every chunk before passing to Chroma
  const sanitizedChunks = chunks.map((doc) => ({
    ...doc,
    metadata: sanitizeMetadata(doc.metadata),
  }));

  const vectorStore = await Chroma.fromDocuments(sanitizedChunks, embedder, {
    collectionName: "my_collection",
    url: "http://localhost:8000", // local Docker Chroma
  });
}

export async function getRetriever(embedder) {
  const vectorStore = await Chroma.fromExistingCollection(embedder, {
    collectionName: "my_collection",
    url: "http://localhost:8000",
  });
  if (!vectorStore) {
    throw new Error("vector store is not initialized");
  }
  return vectorStore.asRetriever();
}
