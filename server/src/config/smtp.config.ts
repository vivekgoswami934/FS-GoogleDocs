import { createTransport } from "nodemailer";

const transporter = createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "vivekgoswami934934@gmail.com",
    pass: "password",
  },
  secure: true,
});

export default transporter;
