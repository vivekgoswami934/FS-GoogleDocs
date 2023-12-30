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
exports.userService = void 0;
const user_model_1 = require("../db/models/user.model");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const refresh_token_model_1 = require("../db/models/refresh-token.model");
class UserService {
    constructor() {
        this.findUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ where: { email } });
            return user;
        });
        this.createUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield (0, bcrypt_1.genSalt)();
            const hashedPassword = yield (0, bcrypt_1.hash)(password, salt);
            const verificationToken = jsonwebtoken_1.default.sign({ email }, "verfiy_secret");
            const user = yield user_model_1.User.create({
                email,
                password: hashedPassword,
                verificationToken,
            });
            // call method to send verfication email
        });
        this.checkPassword = (user, password) => __awaiter(this, void 0, void 0, function* () {
            return yield (0, bcrypt_1.compare)(password, user.password);
        });
        this.getRequestUser = (user) => __awaiter(this, void 0, void 0, function* () {
            if (user instanceof user_model_1.User) {
                const userWithRoles = yield user_model_1.User.scope("withRoles").findByPk(user.id);
                const roles = userWithRoles === null || userWithRoles === void 0 ? void 0 : userWithRoles.userRoles.map((userRole) => userRole.role.name);
                return {
                    id: user.id,
                    email: user.email,
                    roles: roles,
                };
            }
            return user;
        });
        this.generateAuthResponse = (user) => __awaiter(this, void 0, void 0, function* () {
            const requestUser = yield this.getRequestUser(user);
            const accessToken = jsonwebtoken_1.default.sign(requestUser, "access_token", {
                expiresIn: "24h",
            });
            const refreshToken = jsonwebtoken_1.default.sign(requestUser, "refresh_token", {
                expiresIn: "24h",
            });
            yield refresh_token_model_1.RefreshToken.destroy({
                where: { userId: requestUser.id },
            });
            yield refresh_token_model_1.RefreshToken.create({
                token: refreshToken,
                userId: requestUser.id,
            });
            return { accessToken, refreshToken };
        });
    }
}
const userService = new UserService();
exports.userService = userService;
