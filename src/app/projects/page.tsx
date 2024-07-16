import React from 'react';
import Image from "next/image";
import {Projects} from "@/constants/projects";


const ProjectPage = async () => {

    return (
        <div className={'max-w-7xl w-full px-4 md:px-8 mx-auto'}>
            <h1 className={'text-4xl font-semibold lg:text-5xl pt-5'}>
                Projects
            </h1>
            <p className={'leading '}>
                Check out the projects I&apos;ve created
            </p>
            <div className={'py-12 grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 grid-cols-1'}>
                {Projects.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={'group block'}
                        target={'_blank'}
                    >
                        <div className={'aspect-w-16 aspect-h-12 h-[20rem] overflow-hidden rounded-2xl relative'}>
                            <Image
                                src={item.imageUrl}
                                alt={'project image'}
                                fill
                                sizes={'100%'}
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
        </div>
    );
};

export default ProjectPage;