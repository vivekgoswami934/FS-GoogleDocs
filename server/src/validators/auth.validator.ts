import { body } from "express-validator";

class AuthValidator {
  public login = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email"),

    body("password").exists().withMessage("Must provide a valid Password"),
  ];

  public refreshToken = [
    body("token").exists().withMessage("Must provide a valid token."),
  ];
}

const authValidator = new AuthValidator();

export { authValidator };
