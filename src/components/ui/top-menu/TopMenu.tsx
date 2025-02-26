'use client'
import { titleFont } from "@/config/fonts";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { useUIStore } from "@/store";
import Image from "next/image";


export const TopMenu = () => {

    const openSideMenuAction = useUIStore((state) => state.openSideMenu)

    return (
        <nav className="sticky top-0 flex items-center justify-between w-full px-5 py-2 bg-white shadow-md shadow-slate-300">
            <div>
                <Link href="/" className="flex flex-col pt-3">
                    <Image src="/images/logo/logo-sje.PNG" alt="Logo"
                        width={100} height={70}
                        className="h-10" />
                    <span className={`${titleFont.className} antialiased text-xs`}>SOLUCIONES JURIDICAS EFECTIVAS</span>

                </Link>
            </div>
            {/* Center menu */}
            <div className="hidden md:block">
                <Link
                    className="p-2 m-2 transition-all rounded-md hover:bg-gray-300 hover:text-gray-900"
                    href="#home">
                    Inicio
                </Link>
                <Link
                    className="p-2 m-2 transition-all rounded-md hover:bg-gray-300 hover:text-gray-900"
                    href="#services">
                    Servicios
                </Link>
                <Link
                    className="p-2 m-2 transition-all rounded-md hover:bg-gray-300 hover:text-gray-900"
                    href="#about">
                    Sobre Nosotros
                </Link>
                <Link
                    className="p-2 m-2 transition-all rounded-md hover:bg-gray-300 hover:text-gray-900"
                    href="#contact">
                    Contactanos
                </Link>
            </div>

            <div className="flex items-center md:hidden">
                <button className="p-2 m-2 transition-all rounded-md hover:bg-gray-100 hover:text-gray-900"
                    onClick={openSideMenuAction}>
                    <CiMenuBurger className="text-2xl" />
                </button>
            </div>
        </nav>
    );
};