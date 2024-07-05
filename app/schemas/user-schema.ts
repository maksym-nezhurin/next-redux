import {z} from "zod";

export const userSchema = z.object({
    firstName: z.string().min(3, 'First name is required'),
    lastName: z.string().min(3, 'Last name is required'),
    rating: z.number().min(1).max(5, 'Please select from 1 to 5'),
    email: z.string().email('Invalid email address'),
});