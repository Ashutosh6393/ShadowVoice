import {z} from 'zod'

export const usernameValidation = z.string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be atleast 20 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain alphanumeric characters, underscores and hyphens")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string()
       .email("Please enter a valid email address"),
       
    password: z.string()
       .min(6, {message: "Password must be at least 6 characters"})
})