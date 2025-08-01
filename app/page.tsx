import "./globals.css";
import Link from "next/link";
import HeaderText from "./components/text-type/text";
import WhyOnlyMediList from "./components/content/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 image-bg">
        <div className="flex flex-col md:items-end justify-center w-full h-screen gap-3 sm:items-center">
          <HeaderText />
          <h3 className="text-white">Schedule Your Doctor&#39;s Appointment Today — Convenient, Secure, and Just a Click Away</h3>
          <button className="bg-light-101 text-black p-2 rounded hover:bg-blue-102 ">
            <Link href="/doctors" className="text-sm text-black">Find Doctors</Link>
          </button>
        </div>
      </div>
      <div>
        <WhyOnlyMediList />
      </div>
      
    </>
  );
}
