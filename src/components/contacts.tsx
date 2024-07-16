'use client'

import React, {useState} from 'react';
import {contacts, socialMedia} from "@/constants/logos";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Copy, Link2} from "lucide-react";
import {toast} from "sonner";

const Contacts = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true)
            {isCopied && text !== '' && (
                toast('Copied to clipboard!', {
                    description: (text),
                    position: 'top-right',
                    duration: 5000,
                    closeButton: true,
                })
            )}
            setTimeout(() => {
                setIsCopied(false)
            }, 10000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
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
                        className={'mt-4 bg-[#EF476F]'}
                        size={'sm'}
                        asChild
                    >
                        <Link
                            href={item.href}
                            target={'_blank'}
                        >
                            <span className={'group-hover:scale-105 inline-flex items-center'}>
                                <>
                                    Copy
                                    <Link2 className={'w-4 h-4 ml-4'}/>
                                </>
                            </span>
                        </Link>
                    </Button>
                </Card>
            ))}
            {contacts.map((item, index) => (
                <Card
                    key={'index'}
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
                        {item.contact}
                    </p>
                    <Button
                        className={'mt-4 group bg-[#EF476F]'}
                        size={'sm'}
                        onClick={() => copyToClipboard(item.contact)}
                    >
                        <span className={'group-hover:scale-105 inline-flex items-center'}>
                            <>
                                Copy
                                <Copy className={'w-4 h-4 ml-4'}/>
                            </>
                        </span>
                    </Button>
                </Card>
            ))}

        </>
    );
};

export default Contacts;