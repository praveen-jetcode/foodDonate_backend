"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodDonationSchema = new mongoose_1.default.Schema({
    personName: {
        type: String
    },
    personPhoneNo: {
        type: String
    },
    foodType: {
        type: String
    },
    discription: {
        type: String
    },
    quantity: {
        type: String
    },
    cookedTime: {
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
    picture: {
        type: String
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user"
    }
});
const FOODDONATION = mongoose_1.default.model("foodDonation", foodDonationSchema);
exports.default = FOODDONATION;
