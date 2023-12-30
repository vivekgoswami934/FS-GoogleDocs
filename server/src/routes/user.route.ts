import { Router } from "express";
import { userValidator } from "../validators/user.validator";
import { userController } from "../controllers/user/user.controller";

const userRouter = Router();

userRouter.post("/", userValidator.register, userController.register);

export default userRouter;
