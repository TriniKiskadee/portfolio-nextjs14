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

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className={'sticky top-0 max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12 backdrop-blur-md z-10 bg-gray-700/10'}>
            <div className={'col-span-6 flex md:col-span-3'}>
                <Link
                    href={'/'}
                >
                    <h1 className={'text-3xl sm:text-xl font-semibold'}>
                        Renaud <span className={'text-[#EF476F]'}>Sennon</span>
                    </h1>
                </Link>
            </div>
            <div className={'hidden sm:flex justify-center items-center col-span-6'}>
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
            <div className={'flex items-center justify-end md:col-span-3 col-span-6'}>
                {/*TODO: Add contact form and email functionality to contact me button*/}
                <Button className={'hidden sm:block'}>
                    Contact Me
                </Button>
                <div className={'sm:hidden'}>
                    <MobileNav pathname={pathname}/>
                </div>
            </div>
        </nav>
    )
        ;
};

export default Navbar;