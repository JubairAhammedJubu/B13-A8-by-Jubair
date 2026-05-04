"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import {authClient} from "@/lib/auth-client";
import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const {data: session} = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 px-0 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/allbooks"}>All Books</NavLink>
              </li>
              <li>
                <NavLink href={"/Profile"}>My Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"
          >
            Bookify
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/allbooks"}>All Books</NavLink>
            </li>
            <li>
              <NavLink href={"/Profile"}>My Profile</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-3 md:mr-0 gap-3">
          {!user ? (
            <Link
              href="/login"
              className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full"
            >
              Login
            </Link>
          ) : (
            <>
              {/* User Info */}
              <div>
                <span className="hidden md:block font-bold">{user.name}</span>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
