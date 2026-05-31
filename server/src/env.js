import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
export const GROQ_API_KEY = process.env.GROQ_API_KEY;
export const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
export const CHROMA_API_KEY = process.env.CHROMA_API_KEY;
export const CHROMA_DBNAME = process.env.CHROMA_DBNAME;
export const CHROMA_TENANT = process.env.CHROMA_TENANT;
