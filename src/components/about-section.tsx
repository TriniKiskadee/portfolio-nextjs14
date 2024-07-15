import React from 'react';
import {Card} from "@/components/ui/card";
import CustomButton from "@/components/custom-button";
import Image from "next/image";
import ContactForm from "@/components/contact-form";

const AboutSection = () => {
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'}>
            <Card className={'col-span-1 lg:col-span-2 border-none bg-gray-100 p-8'}>
                <h1 className={'text-4xl lg:text-6xl capitalize'}>
                    Web developer, especially enthusiastic about SaaS. {' '}
                    <span className={'text-sm text-muted-foreground'}>(and rocks!)</span>
                </h1>
                <p className={'my-4 text-muted-foreground lg:text-lg'}>
                    I am a software engineer with a passion for creating efficient and
                    user-friendly web applications. I have experience in developing
                    scalable and maintainable web applications using modern technologies
                    and frameworks. I am passionate about creating innovative solutions
                    that solve real-world problem.
                </p>
                <ContactForm
                    title={'Contact Me'}
                    description={'Please fill out the form below'}
                    buttonLabel={'Get In Touch'}
                />
            </Card>
            <div className={'col-span-1'}>
                <Image
                    src={'/rock.jpg'}
                    alt={'About Me'}
                    width={720}
                    height={1280}
                    className={'h-[500px] object-cover rounded-lg w-full'}
                />
            </div>
        </div>
    );
};

export default AboutSection;