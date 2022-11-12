"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNo: {
        type: String
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    companyId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "company"
    }
});
const USER = mongoose_1.default.model("user", userSchema);
exports.default = USER;
