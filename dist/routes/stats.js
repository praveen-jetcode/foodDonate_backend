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
const express_1 = require("express");
const foodDonation_1 = __importDefault(require("../models/foodDonation"));
const recevive_1 = __importDefault(require("../models/recevive"));
const user_1 = __importDefault(require("../models/user"));
const errorHandler_1 = __importDefault(require("../config/errorHandler"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let totalFoodDonation = yield foodDonation_1.default.countDocuments({});
        let totalReceive = yield recevive_1.default.countDocuments({});
        let totalUser = yield user_1.default.countDocuments({});
        if ((totalFoodDonation || totalReceive || totalUser)) {
            res.status(200).json({
                totalFoodDonation,
                totalReceive,
                totalUser
            });
        }
        else {
            throw errorHandler_1.default.BadRequest;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = router;
