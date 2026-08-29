import dotenv from "dotenv";

dotenv.config();

const requiredEnv = ["PORT", "RESEND_API_KEY", "COLLEGE_EMAIL", "FRONTEND_URL"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const env = {
  port: process.env.PORT,
  resendApiKey: process.env.RESEND_API_KEY,
  collegeEmail: process.env.COLLEGE_EMAIL,
  frontendUrl: process.env.FRONTEND_URL,
};