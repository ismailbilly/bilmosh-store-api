"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const pino_2 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
const config_1 = __importDefault(require("config"));
const fileTransport = pino_1.default.transport({
    target: "pino/file",
    options: { destination: `logging/logs/${config_1.default.get('error_log_file_name')}` }
});
const log = (0, pino_2.default)({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
        },
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.default = log;
