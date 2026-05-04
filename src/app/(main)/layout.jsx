import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import {Toaster} from "react-hot-toast";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />

      <Toaster position="top-center" />
    </>
  );
};

export default MainLayout;
