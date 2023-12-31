import { Router } from "express";
import { userValidator } from "../validators/user.validator";
import { userController } from "../controllers/user/user.controller";
import { authenticate } from "../middleware/auth";

const userRouter = Router();

userRouter.post("/", userValidator.register, userController.register);
userRouter.put("/verify-email/:token", userController.verfiyEmail);

userRouter.get("/:id", authenticate, userController.getUser);

userRouter.post(
  "/reset-password",
  userValidator.resetPassword,
  userController.resetPassword
);

userRouter.put(
  "/password/:token",
  userValidator.confirmResetPassword,
  userController.confirmResetPassword
);

export default userRouter;
