"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const AuthDisplay = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth && (
        <li className="py-2">
          {auth?.firstName} {auth?.lastName}
        </li>
      )}
    </>
  );
};

export default AuthDisplay;
