'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import CustomButton from "@/components/custom-button";
import React, {useState} from "react";
import {ContactFormSchema} from "@/schemas/contact.schema";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {POST} from "@/app/api/send/route";

type ContactFormProps = {
    title: string
    description?: string
    buttonLabel: string
}

const ContactForm = ({title, description, buttonLabel}: ContactFormProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const {reset} = useForm()
    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            confirmEmail: '',
            message: 'I would like to get in touch!',
        },
    })

    /*TODO: Form not resetting and closing on successful submit*/
    const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
        setLoading(true)
        try {
            const response = await POST(values)
            if (response) {
                console.log(`RESEND DATA: ${response}`)
                toast('Success!', {
                    description: (
                        'Your email was sent successfully'
                    ),
                    duration: 5000
                })

                reset()
            }
            setLoading(false)
        } catch (error) {
            console.log(`An error occurred while sending email: ${error}`)
            toast('Opps! Something went wrong.', {
                    description: (
                        'Pleas try again later!'
                    ),
                    duration: 5000
            })
            setLoading(false)
        }
    }

    return (
        <Dialog >
            <DialogTrigger>
                <CustomButton
                    label={buttonLabel}
                    className={'hidden sm:flex -translate-y-[1px]'}
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className={'space-y-8'}
                    >
                        <FormField
                            control={form.control}
                            name={'name'}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={'John Doe'} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={'email'}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={'johndoe@example.com'} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={'confirmEmail'}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Confirm Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder={'johndoe@example.com'} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={'message'}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Message
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={''} {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <CustomButton
                            loading={loading}
                            type="submit"
                            label={'Submit'}
                        />
                    </form>
                </Form>

                <DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ContactForm