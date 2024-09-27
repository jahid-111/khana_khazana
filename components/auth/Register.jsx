import { registerUser } from "@/actions";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign Up</h4>

        <form action={registerUser} className="login-htmlFrom">
          <div className="form-div">
            <label for="firstName">First Name</label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>

          <div className="form-div">
            <label for="lastName">Last Name</label>
            <input
              className="form-input"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="form-div">
            <label for="email">Email Address</label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="form-div">
            <label for="password">Password</label>
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
            Create Account
          </button>
        </form>

        <p className="text-center text-xs mt-2 text-gray-600">Or</p>

        <Link
          href="/login"
          className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Register;
