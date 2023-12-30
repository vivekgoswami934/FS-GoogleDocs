// login
// refresh token
// logout

import { Router } from "express";
import { authController } from "../controllers/auth/auth.controller";
import { authValidator } from "../validators/auth.validator";
import { authenticate } from "../middleware/auth";

const authRouter = Router();

authRouter.post("/login", authValidator.login, authController.login);

authRouter.post(
  "/refresh-token",
  authValidator.refreshToken,
  authController.refreshToken
);

authRouter.delete("/logout", authenticate, authController.logout);

export default authRouter;
