import "./globals.css";
import Link from "next/link";
import HeaderText from "./components/text-type/text";
import WhyOnlyMediList from "./components/content/page";
import CurvedLoop from "./components/curvedText/pages";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 image-bg h-w-full">
        <div className="flex flex-col items-center justify-center w-full pt-10 min-h-screen max-h-screen">
          <div className="flex flex-col md:items-end justify-center w-full gap-3 sm:items-center mt-10">
          <HeaderText />
          <h3 className="text-white">Schedule Your Doctor&#39;s Appointment Today — Convenient, Secure, and Just a Click Away</h3>
          <button className="bg-light-101 text-black p-2 rounded hover:bg-blue-102 ">
            <Link href="/doctors" className="text-sm text-black">Find Doctors</Link>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-20">
          <CurvedLoop
            marqueeText="✦ Book ✦ Appoint ✦ Heal ✦ Care ✦ Save ✦ With ✦ MediList ✦"
            speed={3}
            curveAmount={500}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </div>
        </div>
      </div>
      <div>
        <WhyOnlyMediList />
      </div>

    </>
  );
}
