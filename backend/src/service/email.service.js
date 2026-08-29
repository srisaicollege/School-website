import { Resend } from "resend";
import { env } from "../config/env.js";
const resend = new Resend(env.resendApiKey);

export const sendContactEmail = async ({ name, email, phone, subject, message }) => {
    return await resend.emails.send({
        from: "School Website <onboarding@resend.dev>",
        to: env.collegeEmail,
        subject: subject,
        html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    });
};