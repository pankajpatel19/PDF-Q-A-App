import app from "./src/app.js";
import { PORT } from "./src/env.js";

app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
});
