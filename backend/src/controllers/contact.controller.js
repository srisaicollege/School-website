import { z } from "zod";
import { sendContactEmail } from "../service/email.service.js";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  // ✅ make phone REQUIRED
  phone: z.string().min(10, "Phone number is required"),

  // ✅ optional email (validate only if provided)
  email: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      { message: "Invalid email format" }
    ),

  // ✅ optional subject
  subject: z.string().optional(),

  // ✅ optional message (validate only if provided)
  message: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 5,
      { message: "Message must be at least 5 characters" }
    ),
});

export const contactController = async (req, res, next) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    await sendContactEmail(validatedData);

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    next(error);
  }
};