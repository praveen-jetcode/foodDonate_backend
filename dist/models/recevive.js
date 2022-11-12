"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const receiveSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNo: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    foodId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "foodDonation"
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user"
    }
});
const RECEIVE = mongoose_1.default.model("receive", receiveSchema);
exports.default = RECEIVE;
