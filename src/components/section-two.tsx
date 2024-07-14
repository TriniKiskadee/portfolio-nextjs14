import React from 'react';
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {logos, socialMedia} from "@/constants/logos";
import Background from "@/components/background";
import HoverCardComponent from "@/components/hover-card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const SectionTwo = () => {
    /*TODO: Redesign to split into 2 sections, Web Dev and Python*/
    /*TODO: Redesign to show a little more info, eg. Heading: NextJS, Subheading: Framework*/
    /*TODO: Add 'Skills I Want to Learn' section*/
    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'}>
            <div className={'w-full relative col-span-1'}>
                <Background className={'rounded-2xl'}/>
            </div>
            <div className={'flex flex-col w-full col-span-1 lg:col-span-2 gap-4'}>
                <Card className={'bg-gray-100 border-none'}>
                    <CardHeader>
                        <CardTitle>
                            Explore my stack
                        </CardTitle>
                        <CardDescription>
                            Check out the tools I use daily. Hover on an image for more information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={'flex flex-wrap gap-4'}>
                        {logos.map((item, index) => (
                            <HoverCardComponent
                                key={index}
                                title={item.name}
                                description={item.description}
                                image={item.image}
                                url={item.href}
                                trigger={
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={16}
                                        height={16}
                                        className={'w-16 h-16 rounded-md hover:scale-[120%] transition-transform duration-500 ease-in-out'}
                                    />
                                }
                            />
                        ))}
                    </CardContent>
                </Card>
                <div className={'grid grid-cols-1 sm:grid-cols-3 w-full gap-4'}>
                    {socialMedia.map((item, index) => (
                        <Card
                            key={index}
                            className={'p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none'}
                        >
                            <Image
                                src={item.image}
                                alt={'Icon'}
                                width={16}
                                height={16}
                                className={'w-16 h-16 rounded-md'}
                            />
                            <h1 className={'text-2xl font-medium pt-3'}>
                                {item.name}
                            </h1>
                            <p className={'text-muted-foreground'}>
                                {item.username}
                            </p>
                            <Button
                                className={'mt-4'}
                                size={'sm'}
                                asChild
                            >
                                <Link href={item.href}>
                                    Visit
                                </Link>
                            </Button>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SectionTwo;