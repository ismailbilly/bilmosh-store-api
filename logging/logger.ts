import pino, { destination } from 'pino'
import logger from "pino";
import dayjs from "dayjs";
import config from "config";

const fileTransport = pino.transport({
  target: "pino/file",
  options: { destination: `logging/logs/${process.env.ERROR_LOG_FILE_NAME}` },
});

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
