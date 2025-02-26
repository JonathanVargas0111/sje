'use client'
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { menuItems } from "@/data/menuItems";
// Importamos la variable de menú

export const Sidebar = () => {
    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeSideMenuAction = useUIStore((state) => state.closeSideMenu);

    return (
        <div>
            {isSideMenuOpen && (
                <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30" />
            )}
            {isSideMenuOpen && (
                <div
                    onClick={closeSideMenuAction}
                    className="fixed top-0 left-0 z-10 w-screen h-screen fade-in backdrop-filter backdrop-blur-sm" />
            )}
            <nav
                className={clsx(
                    "fixed p-5 right-0 top-0 w-[280px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    { "translate-x-full": !isSideMenuOpen }
                )}
            >
                <IoCloseOutline
                    size={50}
                    className="absolute cursor-pointer top-5 right-5"
                    onClick={closeSideMenuAction}
                />

                {/* Menú dinámico */}
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="flex items-center p-2 mt-4 transition-all rounded hover:bg-gray-100"
                        onClick={closeSideMenuAction}
                    >

                        <span className="ml-3 text-xl">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};
