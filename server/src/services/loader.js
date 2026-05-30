import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

export async function loadDocument({ path }) {
  const loader = new PDFLoader(path);
  let text = "";
  const doc = await loader.load();

  const spliter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 100,
  });

  const chunk = await spliter.splitDocuments(doc);

  return chunk;
}
