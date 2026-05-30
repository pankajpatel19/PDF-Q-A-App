import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
export const GROQ_API_KEY = process.env.GROQ_API_KEY;
export const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
