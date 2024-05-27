import mongoose from "mongoose";
import config from "config";
import logger from "../../logging/logger";

async function connectDB() {
  const dbUri = process.env.DBURI
  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connectDB;
