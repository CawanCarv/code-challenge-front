import * as z from "zod/v4";

export const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export const firstStepSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .max(100, "Character limit exceeded (100)"),

  email: z
    .email("Invalid Email Format")
    .max(100, "Character limit exceeded (100)"),
  phone: z
    .string("Phone is required")
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Invalid Phone"),
});

export const secondStepSchema = z.object({
  zip_code: z.string().length(9, "Zip Code is required"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(120, "Character limit exceeded (120)"),
  number: z
    .string()
    .min(1, "Address Number is required")
    .max(10, "Character limit exceeded (10)"),
  city: z
    .string()
    .min(1, "City is required")
    .max(60, "Character limit exceeded (60)"),
  state: z.enum(estados),
});

export const thirdStepSchema = z.object({
  termsAccepted: z.boolean().parse(true),
});
