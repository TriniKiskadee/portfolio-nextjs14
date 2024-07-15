import {z, ZodType} from "zod";

export type ContactFormSchemaProps = {
    name: string;
    email: string;
    confirmEmail: string;
    message: string;
}

export const ContactFormSchema: ZodType<ContactFormSchemaProps> = z
    .object({
        name: z
            .string()
            .min(3, {message: 'Your name should contain at least 3 characters'})
            .max(50, {message: 'Your name should not be longer than 50 characters'}),
        email: z
            .string()
            .email({message: 'Incorrect email format'}),
        confirmEmail: z
            .string()
            .email(),
        message: z.string()
            .min(3, {message: 'Your message should contain at least 3 characters'})
            .max(1000, {message: 'Your message should not be longer than 1000 characters'}),
    }).refine((schema) => schema.email === schema.confirmEmail, {
        message: 'Your emails not match',
        path: ['confirmEmail'],
    })