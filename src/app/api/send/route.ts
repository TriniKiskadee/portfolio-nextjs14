'use server'

import contactEmailForm from "@/components/email/contact-email-template";
import {Resend} from 'resend';
import {ContactFormSchemaProps} from "@/schemas/contact.schema";

const resend = new Resend(process.env.RESEND_API_KEY!);
export async function POST(values: ContactFormSchemaProps) {
    try {
        const {data, error} = await resend.emails.send({
            from: 'Renaud-Portfolio <onboarding@resend.dev>',
            to: 'renaudsennon+resend@gmail.com',
            subject: 'New message from you portfolio site',
            react: contactEmailForm(
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                }
            ),
        });

        if (error) {
            return Response.json({error}, {status: 500});
        }

        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}

/*TODO: Resend not working*/