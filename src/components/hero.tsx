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
                    Hi! I'm Renaud Sennon 🚀
                </h1>
                <h1 className={'text-4xl lg:text-6xl font-normal my-4'}>
                    <span className={'inline-flex items-center'}>
                        A
                        <WordRotate
                            words={['', '', '', '', '', '', 'n']}
                        />
                        <WordRotate
                            words={['Next.JS', 'TypeScript', 'JavaScript', 'Front End', 'Back End', 'SaaS', 'AI']}
                            className={'text-[#EF476F] ml-4'}
                        />
                    </span><br/>
                    developer, working and living in Trinidad and Tobago 🇹🇹
                </h1>
                <ContactForm
                    title={'Get in touch'}
                    description={'Please fill out the form below'}
                    buttonLabel={'Get In Touch'}
                />
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