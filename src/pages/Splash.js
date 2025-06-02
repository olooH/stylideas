import React from "react";
import logo from "../assets/logo.svg";

export default function SplashScreen() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center overflow-hidden">
      <img src={logo} alt="STYLIDEAS Logo" className="w-2/3 max-w-xs object-contain" />
    </div>
  );
}
