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
const errorHandler_1 = __importDefault(require("../config/errorHandler"));
const foodDonation_2 = require("../middleweres/validation/foodDonation");
const router = (0, express_1.Router)();
router.post('/', foodDonation_2.foodValidation, foodDonation_2.validationFood, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = new foodDonation_1.default(req.body);
        if (data) {
            yield data.save();
            res.status(200).json(data);
        }
        else {
            throw errorHandler_1.default.NotFound;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield foodDonation_1.default.find().populate("userId");
        let totalCount = yield foodDonation_1.default.countDocuments();
        if (data) {
            res.status(200).json({ data, count: totalCount });
        }
        else {
            throw errorHandler_1.default.BadRequest;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "invalid id",
            });
        }
        let data = yield foodDonation_1.default.findById(id);
        if (data) {
            res.status(200).json(data);
        }
        else {
            throw errorHandler_1.default.InternalServerError;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let body = req.body;
    try {
        let data = yield foodDonation_1.default.findByIdAndUpdate(id, body);
        if (data) {
            res.status(200).json(data);
        }
        else {
            throw errorHandler_1.default.BadRequest;
        }
    }
    catch (err) {
        console.log(err);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let body = req.body;
    try {
        let data = yield foodDonation_1.default.findByIdAndDelete(id, body);
        if (data) {
            res.status(200).json(data);
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
