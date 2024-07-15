import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {skillToLearnLogos} from "@/constants/logos";
import HoverCardComponent from "@/components/hover-card";
import Image from "next/image";

const SkillsToLearn = () => {
    return (
        <Card className={'bg-gray-100 border-none'}>
            <CardHeader>
                <CardTitle>
                    Skill to learn
                </CardTitle>
                <CardDescription>
                    These are the tools and technologies I wish to learn in the near future. Hover on an image
                    for more information.
                </CardDescription>
            </CardHeader>
            <CardContent className={'flex flex-wrap gap-4'}>
                {skillToLearnLogos.map((item, index) => (
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
                                className={'w-16 h-16 rounded-md transition-transform duration-500 ease-in-out'}
                            />
                        }
                    />
                ))}
            </CardContent>
        </Card>
    );
};

export default SkillsToLearn;