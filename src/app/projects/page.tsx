import React from 'react';
import Image from "next/image";
import {getAllProjects} from "@/actions/project.actions";
import {ProjectsCard} from "@/lib/interface";

const data = [
    {
        _id: '1',
        title: 'Project 1',
        description: 'Dummy Data',
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: '',
        link: 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiTss_P5KeHAxUdVTABHWteBaQQPAgJ',
    }
]

const ProjectPage = async () => {
    /*const data: ProjectsCard = await getAllProjects();*/

    return (
        <div className={'max-w-7xl w-full px-4 md:px-8 mx-auto'}>
            <h1 className={'text-4xl font-semibold lg:text-5xl pt-5'}>
                Projects
            </h1>
            <p className={'leading '}>
                Check out the projects I've created
            </p>
            <div className={'py-12 grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 grid-cols-1'}>
                {data.map((item) => (
                    <a
                        key={item._id}
                        href={item.link}
                        className={'group block'}
                        target={'_blank'}
                    >
                        <div className={'aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative'}>
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
        </div>
    );
};

export default ProjectPage;