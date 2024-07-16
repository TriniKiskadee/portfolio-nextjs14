import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import {Tailwind} from '@react-email/tailwind'

type ContactFormEmailProps = {
    name: string
    email: string
    message: string
}

function ContactFormEmail({name, email, message}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>
                New message from you portfolio site
            </Preview>
            <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>
                            You received the following message from the contact form
                        </Heading>
                        <Text>
                            {name}
                        </Text>
                        <Hr/>
                        <Text>
                            The sender&apos;s email is : {email}
                        </Text>
                        <Hr/>
                        <Text>
                            {message}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);
}

export default ContactFormEmail
