const userNotFound: Array<ResponseMessage> = [
  {
    msg: "Your email or password is incorrect",
  },
];

const emailNotVerified: Array<ResponseMessage> = [
  {
    msg: "Please verify your email before logging in",
  },
];

const resetPassword: Array<ResponseMessage> = [
  {
    msg: "If a user with that email already exists , you will be receive a email with instructions to reset your password",
  },
];

export { userNotFound, emailNotVerified , resetPassword };
