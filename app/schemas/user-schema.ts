import {z, ZodType} from "zod";

export const userSchema = z.object({
    firstName: z.string().min(3, 'First name is required'),
    lastName: z.string().min(3, 'Last name is required'),
    rating: z.number().min(1).max(5, 'Please select from 1 to 5'),
    email: z.string().email('Invalid email address'),
});

export const registerUserSchema = z.object({
    email: z.string().email(),
    githubUrl: z
        .string()
        .url()
        .includes("github.com", { message: "Invalid GitHub URL" }),
    yearsOfExperience: z
        .number({
            required_error: "required field",
            invalid_type_error: "Years of Experience is required",
        })
        .min(1)
        .max(10),
    password: z
        .string()
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // path of error
    });