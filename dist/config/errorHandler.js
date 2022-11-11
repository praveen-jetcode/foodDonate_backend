"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = {
    NotFound: {
        status: 404,
        message: "record not found",
    },
    BadRequest: {
        status: 400,
        message: "error code",
    },
    InternalServerError: {
        status: 500,
        message: "internal server error",
    },
};
exports.default = ErrorHandler;
