"use strict";
// login
// refresh token
// logout
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth/auth.controller");
const auth_validator_1 = require("../validators/auth.validator");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", auth_validator_1.authValidator.login, auth_controller_1.authController.login);
exports.default = authRouter;
