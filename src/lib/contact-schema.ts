import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Please keep your name under 120 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160, "Please keep your email under 160 characters."),
  phone: z
    .string()
    .trim()
    .max(40, "Please keep your phone number under 40 characters.")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(1, "Please choose a subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details (at least 10 characters).")
    .max(4000, "Please keep your message under 4,000 characters."),
  // Honeypot: real visitors never see or fill this field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
