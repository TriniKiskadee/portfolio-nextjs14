import React from 'react';
import {navigationItems} from "@/constants/navbar";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={'my-12'}>
            <ul className={'flex flex-wrap justify-center'}>
                {navigationItems.map((item, index) => (
                    <div
                        key={index}
                        className={'px-5 py-2'}
                    >
                        <Link
                            href={item.href}
                            className={'text-muted-foreground'}
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
                <div className={'px-5 py-2'}>
                    <Link
                        href={'https://github.com/TriniKisKadee'}
                        target={'_blank'}
                        className={'text-muted-foreground'}
                    >
                        My GitHub
                    </Link>
                </div>
            </ul>

            <p className={'mt-2 text-center text-muted-foreground'}>
                &copy; 2024 Renaud Sennon. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;