"'use client';"
import Link from "next/link";
import { House, ClipboardPlus, ClipboardClock, ClipboardList } from "lucide-react";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full">
            <header className="bg-transparent border border-light-cyan/70 backdrop-blur-sm text-white p-4 mx-5 my-5 rounded-xl flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-ebony-100">MediList</h1>
                </div>
                <div className="flex gap-5 justify-end items-center">
                    <Link href="/" className="text-sm flex flex-row text-white hover:text-blue-102 hidden md:block">
                        <House className="w-5 h-5" /> 
                        <p>Home</p>
                    </Link>
                    <Link href="/doctors" className="text-sm flex flex-row text-white hover:text-blue-102 hidden md:block">
                        <ClipboardPlus className="w-5 h-5" /> <p>Doctors</p>
                    </Link>
                    <Link href="/appointments" className="text-sm flex flex-row text-white hover:text-blue-102 hidden md:block">
                        <ClipboardClock className="w-5 h-5" /> <p>Appointments</p>
                    </Link>
                    <Link href="/management" className="text-sm flex flex-row text-white hover:text-blue-102 hidden md:block">
                        <ClipboardList className="w-5 h-5" /> <p>Management</p>
                    </Link>
                    <Link href="/" className="text-sm text-white hover:text-blue-102 block md:hidden">
                        <House className="w-5 h-5" />
                    </Link>
                    <Link href="/doctors" className="text-sm text-white hover:text-blue-102 block md:hidden">
                        <ClipboardPlus className="w-5 h-5" />
                    </Link>
                    <Link href="/appointments" className="text-sm text-white hover:text-blue-102 block md:hidden">
                        <ClipboardClock className="w-5 h-5" />
                    </Link>
                    <Link href="/management" className="text-sm text-white hover:text-blue-102 block md:hidden">
                        <ClipboardList className="w-5 h-5" />
                    </Link>
                </div>

            </header>
        </div>
    );
}

export default Header;