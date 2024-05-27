import app from "./app";
//Utils
import connectDB from "./utils/db";
import swaggerDocs from "./utils/swagger";
import logger from "../logging/logger";

const port = Number(process.env.PORT) || 4000;
app.listen(port, async () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  logger.info("Hello from  Server running on " + port);

  //routes(app);
  await connectDB();
  swaggerDocs(app, port);
});
