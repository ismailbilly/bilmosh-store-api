"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const logger_1 = __importDefault(require("../../logging/logger"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const lodash_1 = require("lodash");
function registerUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = {};
        try {
            const user = yield user_model_1.default.create(input);
            return (0, lodash_1.omit)(user.toJSON(), "password");
        }
        catch (error) {
            logger_1.default.error(error, "Error in signup Service");
            result = {
                httpStatus: http_status_codes_1.default.BAD_REQUEST,
                status: "failed",
                errorDetails: error,
            };
            return result;
        }
    });
}
exports.registerUser = registerUser;
