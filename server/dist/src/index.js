"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = 7070;
app.get("/", (req, res) => {
    res.send("Express + TypeScript");
});
app.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});
