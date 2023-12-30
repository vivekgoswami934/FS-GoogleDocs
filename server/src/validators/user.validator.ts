import { body } from "express-validator";
import { userService } from "../services/user.service";

class UserValidator {
  public register = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email address"),

    body("email").custom(async (value) => {
      const user = await userService.findUserByEmail(value);

      if (user) {
        return Promise.reject("User with this email already exists");
      }

      return true;
    }),

    body("password1")
      .isLength({ min: 8, max: 30 })
      .withMessage(
        "Password must be at least 8 characters & not more than 30 characters"
      ),

    body("password1")
      .matches(/\d/)
      .withMessage("Password must contain atleast 1 number"),

    body("password2").custom((value, { req }) => {
      if (value !== req.body.password1) {
        throw new Error("Password must match");
      }

      return true;
    }),
  ];

  public resetPassword = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must Provide a valid email address"),
  ];

  public confirmResetPassword = [
    body("password1")
      .isLength({ min: 8, max: 30 })
      .withMessage(
        "Password must be at least 8 characters & not more than 30 characters."
      ),
    body("password1")
      .matches(/\d/)
      .withMessage("Password must contain atleast 1 number"),

    body("password2").custom((value, { req }) => {
      if (value !== req.body.password1) {
        throw new Error("Password must match.");
      }
      return true;
    }),
  ];
}

const userValidator = new UserValidator();

export { userValidator };
