"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const body_parser_1 = __importDefault(require("body-parser"));
const company_1 = __importDefault(require("./routes/company"));
const users_1 = __importDefault(require("./routes/users"));
const foodDonation_1 = __importDefault(require("../src/routes/foodDonation"));
const receive_1 = __importDefault(require("./routes/receive"));
const stats_1 = __importDefault(require("./routes/stats"));
const app = (0, express_1.default)();
require('./config/database');
// //body-parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/company', company_1.default);
app.use('/users', users_1.default);
app.use('/food', foodDonation_1.default);
app.use('/rec', receive_1.default);
app.use('/stat', stats_1.default);
// app.get('/',(req,res)=>{
//     res.json('hello')
// })
app.use(() => {
    throw (0, http_errors_1.default)(404, "not found");
});
// //error handler
const errorHandler = (err, req, res, next) => {
    console.log(err.message, err.statuscode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statuscode || 500)
        .json({ message: err.message || "An unknow Error" });
};
app.use(errorHandler);
//port
app.listen(4000, () => {
    console.log(`listening port on 4000`);
});
