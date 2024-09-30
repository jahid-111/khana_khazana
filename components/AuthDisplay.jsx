"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const AuthDisplay = () => {
  const { auth } = useAuth();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mx-3 relative flex justify-center items-center ">
      {auth ? (
        <>
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            <FaRegUserCircle className=" hover:text-orange-500" />
          </button>
          {toggle && (
            <div className="absolute top-5 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  {auth?.firstName} {auth?.lastName}
                </li>
                <li className="px-4 py-2 bg-red-500 text-white hover:bg-red-600">
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          )}

          <ul className="hidden md:block">
            <li className="py-2 text-gray-500">
              {auth?.firstName} {auth?.lastName}
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AuthDisplay;
