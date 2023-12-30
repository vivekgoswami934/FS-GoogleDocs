"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const express_validator_1 = require("express-validator");
class AuthValidator {
    constructor() {
        this.login = [
            (0, express_validator_1.body)("email")
                .isEmail()
                .normalizeEmail()
                .withMessage("Please enter a valid email"),
            (0, express_validator_1.body)("password").exists().withMessage("Must provide a valid Password"),
        ];
    }
}
const authValidator = new AuthValidator();
exports.authValidator = authValidator;
