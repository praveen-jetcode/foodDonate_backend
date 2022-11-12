"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveFood = exports.foodReceive = void 0;
const express_validator_1 = require("express-validator");
exports.foodReceive = [
    (0, express_validator_1.check)('name').trim().not().isEmpty().withMessage("enter the name"),
    (0, express_validator_1.check)("email").normalizeEmail().isEmail().withMessage("Enter the email"),
    (0, express_validator_1.check)('phoneNo').trim().not().isEmpty().withMessage("enter the phoneNo"),
    (0, express_validator_1.check)('address').trim().not().isEmpty().withMessage("enter the address"),
    (0, express_validator_1.check)('state').trim().not().isEmpty().withMessage("enter the state"),
    (0, express_validator_1.check)('city').trim().not().isEmpty().withMessage("enter the city"),
    (0, express_validator_1.check)('foodId').trim().not().isEmpty().withMessage("enter the foodId"),
    (0, express_validator_1.check)('userId').trim().not().isEmpty().withMessage("enter the userId")
];
const receiveFood = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req).array();
    if (!result.length)
        return next();
    const error = result[0].msg;
    res.json({ success: false, message: error });
};
exports.receiveFood = receiveFood;
