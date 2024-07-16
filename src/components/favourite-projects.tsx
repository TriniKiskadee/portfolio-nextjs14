import React from 'react';
import Image from "next/image";
import {Projects} from "@/constants/projects";


const FavouriteProjects = async () => {
    return (
        <>
            <h1 className={'text-4xl lg:text-6xl font-medium mt-20'}>
                Recent Projects
            </h1>
            <div className={'py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1'}>
                {Projects.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={'group block'}
                        target={'_blank'}
                    >
                        <div className={'aspect-w-16 aspect-h-12 h-[15rem] overflow-hidden rounded-2xl relative'}>
                            <Image
                                src={item.imageUrl}
                                alt={'project image'}
                                fill
                                className={'object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl'}
                            />
                        </div>
                        <div className={'mt-4'}>
                            <h2 className={'font-medium text-lg hover:underline'}>
                                {item.title}
                            </h2>
                            <p className={'mt-1 text-muted-foreground line-clamp-3'}>
                                {item.description}
                            </p>
                            <div className={'mt-3 flex flex-wrap gap-2'}>
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={'inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 tex-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20'}
                                    >
                                    {tag}
                                </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default FavouriteProjects;