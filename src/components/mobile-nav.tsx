import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {navigationItems} from "@/constants/navbar";
import Link from "next/link";
import {cn} from "@/lib/utils";

const MobileNav = ({pathname}: { pathname: string }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={"outline"}
                    size={'icon'}
                >
                    <Menu className={'h-4 w-4'}/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className={'mt-5 flex px-2 space-y-1 flex-col'}>
                    {navigationItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn('group flex items-center px-2 py-2 text-md font-semibold rounded-md',
                                pathname === item.href
                                    ? 'bg-muted'
                                    : 'hover:bg-muted hover:bg-opacity-75'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className={'mt-1 flex px-2 flex-col'}>
                    <Link
                        href={'https://github.com/TriniKisKadee'}
                        target={'_blank'}
                        className={'flex items-center px-2 py-2 text-md font-semibold rounded-md hover:bg-muted hover:bg-opacity-75'}
                    >
                        My GitHub
                    </Link>
                </div>
                <SheetFooter className={'mt-5'}>
                    <SheetClose asChild>
                        <Button type={'submit'}>
                            Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;