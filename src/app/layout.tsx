import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Toaster} from "@/components/ui/sonner";
import {constructMetadata} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]});

export const metadata = constructMetadata()

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Toaster position={'top-right'}/>
            </body>
        </html>
    );
}
