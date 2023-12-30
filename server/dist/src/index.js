"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const models_1 = __importDefault(require("./db/models"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 7070;
models_1.default.sequelize.sync();
app.get("/", (req, res) => {
    res.send("Express + TypeScript");
});
app.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});
