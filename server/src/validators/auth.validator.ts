import { body } from "express-validator";

class AuthValidator {
  public login = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email"),

    body("password").exists().withMessage("Must provide a valid Password"),
  ];
}

const authValidator = new AuthValidator();

export { authValidator };