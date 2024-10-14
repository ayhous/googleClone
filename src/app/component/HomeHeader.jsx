import Link from "next/link";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://www.mail.google.com" className="hover:underline">
          gmail
        </Link>

        <Link href="https://www.image.google.com" className="hover:underline">
          Images
        </Link>

        <Link href="https://www.google.com" className="hover:underline">
          <BsFillGrid3X3GapFill
            className="bg-transparent
           hover:bg-gray-200 rounded-full text-4xl"
          />
        </Link>

        <button className="bg-blue-500 text-slate-100 px-6 py-2 font-medium rounded-md hover: brightness-105 hover:shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
