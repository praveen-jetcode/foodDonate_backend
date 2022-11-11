"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationFood = exports.foodValidation = void 0;
const express_validator_1 = require("express-validator");
exports.foodValidation = [
    (0, express_validator_1.check)('personName').trim().not().isEmpty().withMessage("enter the personname"),
    (0, express_validator_1.check)("personPhoneNo").normalizeEmail().isEmail().withMessage("Enter the PersonPhoneNo"),
    (0, express_validator_1.check)('foodType').trim().not().isEmpty().withMessage("enter the foodType"),
    (0, express_validator_1.check)('discription').trim().not().isEmpty().withMessage("enter the discription"),
    (0, express_validator_1.check)('quantity').trim().not().isEmpty().withMessage("enter the quantity"),
    (0, express_validator_1.check)('cookedTime').trim().not().isEmpty().withMessage("enter the cookedTime"),
    (0, express_validator_1.check)('address').trim().not().isEmpty().withMessage("enter the address"),
    (0, express_validator_1.check)('state').trim().not().isEmpty().withMessage("enter the state"),
    (0, express_validator_1.check)('city').trim().not().isEmpty().withMessage("enter the city"),
    (0, express_validator_1.check)('userId').trim().not().isEmpty().withMessage("enter the userId")
];
const validationFood = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req).array();
    if (!result.length)
        return next();
    const error = result[0].msg;
    res.json({ success: false, message: error });
};
exports.validationFood = validationFood;
