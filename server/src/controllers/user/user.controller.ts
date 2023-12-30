import { Request, Response } from "express";
import catchAsync from "../../middleware/catch-async";
import { validationResult } from "express-validator";
import { userService } from "../../services/user.service";
import { resetPassword } from "../../responses";
import jwt, { VerifyErrors } from "jsonwebtoken";
class UserController {
  public register = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const { email, password } = req.body;

    await userService.createUser(email, password);

    return res.sendStatus(200);
  });

  public getUser = catchAsync(async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);

    const user = await userService.findUserById(userId);

    if (user === null) return res.sendStatus(400);

    return res.status(200).json(user);
  });

  public resetPassword = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const { email } = req.body;

    const user = await userService.findUserByEmail(email);

    if (!user) return res.status(200).json(resetPassword);

    await userService.resetPassword;

    return res.status(200).json(resetPassword);
  });

  public confirmResetPassword = catchAsync(
    async (req: Request, res: Response) => {
      const err = validationResult(req);
      if (!err.isEmpty()) {
        return res.status(400).json(err);
      }

      const resetPasswordToken = req.params.token;
      const { password1 } = req.body;

      jwt.verify(
        resetPasswordToken,
        "password_reset",
        async (err: VerifyErrors | null, decoded: unknown) => {
          if (err) return res.sendStatus(403);
          try {
            const { email } = decoded as { email: string };
            userService
              .findUserByPasswordResetToken(email, resetPasswordToken)
              .then((user) => {
                if (!user) return res.sendStatus(400);

                userService
                  .updatePassword(user, password1)
                  .then(() => {
                    return res.sendStatus(200);
                  })
                  .catch((err) => {
                    return res.sendStatus(500);
                  });
              })
              .catch((err) => {
                return res.sendStatus(500);
              });
          } catch (error) {
            console.log(error);
            return res.sendStatus(403);
          }
        }
      );
    }
  );
}

const userController = new UserController();

export { userController };
