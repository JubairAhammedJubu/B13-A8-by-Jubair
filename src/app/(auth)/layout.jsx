import Navbar from "@/components/shared/Navbar";
import React from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Toaster position="top-center" />
    </div>
  );
};

export default AuthLayout;
