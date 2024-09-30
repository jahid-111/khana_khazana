import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthDisplay from "./AuthDisplay";

const NavSection = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt=""
            className="object-cover "
            height={110}
            width={110}
          />
        </Link>

        <div className=" flex justify-center items-center">
          <ul className="flex gap-4 text-sm text-gray-500">
            <li className="py-2 active">
              <Link href="/">Home</Link>
            </li>

            <li className="py-2">
              <Link href="">Recipe</Link>
            </li>

            <li className="py-2">
              <Link href="/">About us</Link>
            </li>
          </ul>

          <AuthDisplay />
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
