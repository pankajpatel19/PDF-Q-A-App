import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { HUGGINGFACE_API_KEY } from "../env.js";
import { storeEmbedds } from "./vector.js";

export const embedder = new HuggingFaceInferenceEmbeddings({
  apiKey: HUGGINGFACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});

export async function generateEmbedding(data) {
  try {
    // Pass original Document objects and the embedder instance — not raw strings or pre-computed vectors
    await storeEmbedds(data, embedder);
  } catch (error) {
    console.log("Embed Error : ", error);
  }
}
