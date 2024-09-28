"use client";

import { loginUserAccess } from "@/actions";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const userInfo = await loginUserAccess(formData);

      if (userInfo) {
        setAuth(userInfo);
        router.push("/");
      } else {
        setError("Please Provide Valid Access");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <h3 className=" text-red-500 font-semibold">{error}</h3>
        <form onSubmit={onSubmit} className="login-htmlFrom">
          <div className="form-div">
            <label htmlFor="email">Email Address</label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="form-div">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs mt-2 text-gray-600">Or</p>

        <Link
          href="/register"
          className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
        >
          Create New Account
        </Link>
      </div>
    </section>
  );
};

export default Login;
