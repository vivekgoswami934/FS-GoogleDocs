// login
// refresh token
// logout

import { Router } from "express";
import { authController } from "../controllers/auth/auth.controller";
import { authValidator } from "../validators/auth.validator";

const authRouter = Router();

authRouter.post("/login", authValidator.login, authController.login);

export default authRouter;
