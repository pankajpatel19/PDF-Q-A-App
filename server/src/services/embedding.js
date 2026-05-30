import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { HUGGINGFACE_API_KEY } from "../env.js";

const embedder = new HuggingFaceInferenceEmbeddings({
  apiKey: HUGGINGFACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});

export async function generateEmbedding(data) {
  try {
    const text = data.map((docs) => docs.pageContent);
    const embeddings = await embedder.embedDocuments(text);

    console.log(embeddings);
  } catch (error) {
    console.log("Embedd Error : ", error);
  }
}
