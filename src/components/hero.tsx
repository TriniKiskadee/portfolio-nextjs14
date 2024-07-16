import React from 'react';
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import WordRotate from "@/components/magicui/word-rotate";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            <div
                className={'col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8'}>
                <h1 className={'text-4xl lg:text-6xl font-medium'}>
                    Hello! I&apos;m Renaud Sennon
                </h1>
                <p className={'text-4xl lg:text-4xl font-normal my-4'}>
                    A full-stack developer
                    with <span className={'font-medium underline'}>2 Years</span> experience.
                    My focus is <span className="italic">React (Next.js)</span>.
                </p>
                <div className={'mt-12'}>
                    <ContactForm
                        title={'Get in touch'}
                        description={'Please fill out the form below'}
                        buttonLabel={'Get In Touch'}
                    />
                </div>
            </div>

            <Image
                src={'/profile_pic_nobg_cropped.png'}
                alt={'Renaud_Sennon'}
                width={720}
                height={1280}
                className={'col-span-1 w-[720px] md:h-full object-cover rounded-2xl bg-gray-100'}
                priority
            />
        </div>
    );
};

export default Hero;