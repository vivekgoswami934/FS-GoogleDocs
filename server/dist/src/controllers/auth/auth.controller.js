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
const catch_async_1 = __importDefault(require("../../middleware/catch-async"));
const express_validator_1 = require("express-validator");
class AuthController {
    constructor() {
        this.login = (0, catch_async_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const err = (0, express_validator_1.validationResult)(req);
            if (!err.isEmpty) {
                return res.status(400).json(err);
            }
            const { email, password } = req.body;
        }));
    }
}
