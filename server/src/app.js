import express from "express";
const app = express();

import uploadRoute from "../src/routes/upload.js";

app.use(express.json());
app.use("/api/doc", uploadRoute);

app.get("/", (req, res) => {
  res.json("Server is running");
});
export default app;
