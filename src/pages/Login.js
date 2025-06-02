import React from "react";
import logo from "../assets/logo.svg";
import bg from "../assets/background.jpg";

export default function Login() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative z-10 w-full max-w-sm px-6 pt-1">
        <div className="flex flex-col items-center mb-1">
          <img src={logo} alt="STYLIDEAS Logo" className="w-60 h-60" />
        </div>

        <div className="w-full space-y-3">
          <h1 className="text-xl font-semibold text-black text-center mb-2 font-mont">Login</h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-11 px-4 bg-white/90 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-11 px-4 bg-white/90 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-500"
            />
          </div>

          <div className="text-center">
            <button className="text-gray-500 text-xs hover:text-gray-800 transition-colors mb-10 underline">Forgot your password?</button>
          </div>

          <button className="w-full h-11 bg-black hover:bg-gray-800 text-white rounded-full font-medium text-sm mt-4">
            Sign in
          </button>

          <div className="text-center pt-1">
            <button className="text-gray-600 text-xs hover:text-gray-800 transition-colors underline">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
