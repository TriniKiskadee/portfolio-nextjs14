import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Metadata} from "next";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function constructMetadata({
    title = 'Renaud Sennon - Portfolio',
    description = 'A Portfolio of of my ',
    image = '/thumbnail.png',
    icons = '/logo.png',
    noIndex = false,
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@Wayne2607',
        },
        icons,
        metadataBase: new URL('https://digitalhippo-production-d6a7.up.railway.app'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}