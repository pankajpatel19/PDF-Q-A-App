import express from "express";
const app = express();

import uploadRoute from "../src/routes/upload.js";
import debugRoute from "../src/routes/debug.js";

app.use(express.json());
app.use("/api/doc", uploadRoute);
app.use("/api/debug", debugRoute);

app.get("/", (req, res) => {
  res.json("Server is running");
});
export default app;
