import React from 'react';
import CustomButton from "@/components/custom-button";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className={'col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8'}>
                <h1 className={'text-4xl lg:text-6xl font-medium'}>
                    Hi! I'm Renaud Sennon 🦊
                </h1>
                <h1 className={'text-4xl lg:text-6xl font-normal mt-3'}>
                    I am a {' '}
                    <span className={'text-[#EF476F]'}>
                        Next JS
                    </span>
                    {' '} and {' '}
                    <span className={'text-[#06D6A0]'}>
                        Python
                    </span> developer, working and living in Trinidad and Tobago 🇹🇹
                </h1>
                <CustomButton label={'Get In Touch!'}/>
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

/*TODO: Hover Text with HoverCard Images of memes*/