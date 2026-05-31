import { createRetrievalChain } from "@langchain/classic/chains/retrieval";
import { createStuffDocumentsChain } from "@langchain/classic/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";
import { GROQ_API_KEY } from "../env.js";
import { getRetriever } from "./vector.js";
import { embedder } from "./embedding.js";

const prompt = ChatPromptTemplate.fromTemplate(`
  "You are a helpful assistant. Use the following context to answer the question. If the answer is not in the context, say so. Do not use any external knowledge and provide answer in bullet points"
  Context: {context}
  Question: {input}
  Answer:
`);
const llm = new ChatGroq({
  apiKey: GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});

export async function getRetrievalChain(query) {
  const documentChain = await createStuffDocumentsChain({ llm, prompt });
  const retriver = await getRetriever(embedder);

  const retrievalChain = await createRetrievalChain({
    retriever: retriver,
    combineDocsChain: documentChain,
  });

  const result = await retrievalChain.invoke({
    input: query,
  });
  return result.answer;
}
