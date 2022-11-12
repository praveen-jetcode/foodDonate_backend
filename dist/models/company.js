"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const companySchema = new mongoose_1.default.Schema({
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
    createdAt: {
        type: Date,
        default: new Date(),
    }
});
const COMPANY = mongoose_1.default.model("company", companySchema);
exports.default = COMPANY;
