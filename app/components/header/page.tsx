"'use client';"
import Link from "next/link";
import { House, ClipboardPlus, ClipboardClock, ClipboardList } from "lucide-react";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full">
            <header className="bg-transparent border border-light-cyan/70 backdrop-blur-sm text-white p-4 mx-5 my-5 rounded-xl flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-ebony-100">MediList</h1>
                </div>
                <div className="flex gap-5 justify-end items-center w-1/2">
                    <div className="flex flex-row justify-between items-center text-sm text-white hover:text-blue-102 hover:font-bold transition-all gap-2">
                        <Link href="/" className="hidden md:block">
                            <House className="w-5 h-5" />
                        </Link>
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between items-center text-sm text-white hover:text-blue-102 hover:font-bold transition-all gap-2">
                        <Link href="/doctors" className="hidden md:block">
                            <ClipboardPlus className="w-5 h-5" />
                        </Link>
                        <Link href='/doctors'>
                            <p>Doctors</p>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between items-center text-sm text-white hover:text-blue-102 hover:font-bold transition-all gap-2">
                        <Link href="/appointments" className="hidden md:block">
                            <ClipboardClock className="w-5 h-5" />
                        </Link>
                        <Link href="/appointments">
                            <p>Appointments</p>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-between items-center text-sm text-white hover:text-blue-102 hover:font-bold transition-all gap-2">
                        <Link href="/management" className="hidden md:block">
                            <ClipboardList className="w-5 h-5" />
                        </Link>
                        <Link href="/management">
                            <p>Management</p>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;