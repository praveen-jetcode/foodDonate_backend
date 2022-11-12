"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
mongoose_1.default.connect("mongodb+srv://siva123:7538890089@cluster0.wllr4h0.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("unable to connect database" + err.message);
});
global.Promise;
