"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)('abcdefghijklmnopqrstuvwxyz0123456789', 10);
const categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String },
}, {
    timestamps: true,
});
const CategoryModel = mongoose_1.default.model("Category", categorySchema);
exports.default = CategoryModel;
