"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCompany = exports.companyValidation = void 0;
const express_validator_1 = require("express-validator");
exports.companyValidation = [
    (0, express_validator_1.check)('name').trim().not().isEmpty().withMessage("enter the name"),
    (0, express_validator_1.check)("email").normalizeEmail().isEmail().withMessage("Enter the Proper Email!"),
    (0, express_validator_1.check)('password').trim().not().isEmpty().withMessage("enter the password"),
    (0, express_validator_1.check)('phoneNo').trim().not().isEmpty().withMessage("enter the phoneNo"),
    (0, express_validator_1.check)('address').trim().not().isEmpty().withMessage("enter the address")
];
const validationCompany = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req).array();
    if (!result.length)
        return next();
    const error = result[0].msg;
    res.json({ success: false, message: error });
};
exports.validationCompany = validationCompany;
