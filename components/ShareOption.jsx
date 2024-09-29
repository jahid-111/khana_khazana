import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const ShareOption = () => {
  return (
    <div className=" bg-amber-700 h-screen">
      <div className=" flex justify-center items-center h-full gap-6">
        <Link target="_blank" href="https://www.facebook.com/">
          <FaFacebook className=" h-10 w-10 hover:text-yellow-900" />
        </Link>
        <Link target="_blank" href="https://www.youtube.com/">
          <FaYoutube className=" h-10 w-10 hover:text-yellow-900" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/">
          <FaLinkedin className=" h-10 w-10 hover:text-yellow-900" />
        </Link>
        <Link target="_blank" href="https://x.com">
          <FaTwitter className=" h-10 w-10 hover:text-yellow-900" />
        </Link>
      </div>
    </div>
  );
};

export default ShareOption;
