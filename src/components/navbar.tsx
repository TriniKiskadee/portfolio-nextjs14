'use client'

import React from 'react';
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {Button} from '@/components/ui/button'
import {navigationItems} from "@/constants/navbar";
import {usePathname} from "next/navigation";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
import CustomButton from "@/components/custom-button";
import ContcactForm from "@/components/contact-form";
import ContactForm from "@/components/contact-form";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav
            className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className={'mx-auto w-full max-w-screen-xl px-2.5 md:px-20'}>
                <div className={'flex h-14 items-center justify-between border-b border-zinc-200'}>
                    <Link
                        href={'/'}
                        className={'flex items-center justify-center gap-1'}
                    >
                        <Image
                            src={'/logo.png'}
                            alt={'logo'}
                            width={512}
                            height={512}
                            className={'w-8 h-8 -rotate-45'}
                        />
                        <h1 className={'text-3xl sm:text-xl font-semibold'}>
                            Renaud
                            {' '}
                            <span className={'text-[#EF476F]'}>
                                Sennon
                            </span>
                        </h1>
                    </Link>
                    <div className={'hidden items-center space-x-4 sm:flex'}>
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationItems.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        <Link
                                            href={item.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                                active={pathname === item.href}
                                            >
                                                {item.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                                <NavigationMenuItem>
                                    <Link
                                        href={'https://github.com/TriniKisKadee'}
                                        target={'_blank'}
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            My GitHub
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className={'sm:flex items-center justify-end md:col-span-3 col-span-6'}>
                        <ContactForm
                            title={'Contact Me'}
                            description={'Please fill out the form below'}
                            buttonLabel={'Get In Touch'}
                        />
                        <div className={'sm:hidden'}>
                            <MobileNav pathname={pathname}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
        ;
};

export default Navbar;