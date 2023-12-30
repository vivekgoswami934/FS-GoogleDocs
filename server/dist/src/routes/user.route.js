"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validator_1 = require("../validators/user.validator");
const user_controller_1 = require("../controllers/user/user.controller");
const router = (0, express_1.Router)();
router.post("/", user_validator_1.userValidator.register, user_controller_1.userController.register);
