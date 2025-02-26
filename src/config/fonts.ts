import { Bodoni_Moda, Geist, Geist_Mono, } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const titleFont  = Bodoni_Moda({
    subsets: ["latin"],
    weight: ['400', '700'],
});

