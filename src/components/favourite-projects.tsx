import React from 'react';
import {client} from "@/lib/sanity";
import {ProjectsCard} from "@/lib/interface";
import Image from "next/image";

async function getData() {
    const query = `
        *[_type == 'project'] | order(_createdAt desc) [0...2]  {
            title,
            _id,
            link,
            description,
            tags,
            'imageUrl': image.asset -> url,
        }`

    try {
        const data = await client.fetch(query);

        if (data) return data
    } catch (error: any) {
        console.log(`"getData" ERROR: ${error}`);
    }
}

const FavouriteProjects = async () => {
    const data: ProjectsCard[] = await getData()
    return (
        <>
            <h1 className={'text-4xl lg:text-6xl font-medium mt-20'}>
                Recent Projects
            </h1>
            <div className={'py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1'}>
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
        </>
    );
};

export default FavouriteProjects;