"use client";

import {authClient} from "@/lib/auth-client";
import Link from "next/link";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

 
  const handleLoginFunc = async (data) => {
    const {data: res, error} = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    if (res) {
      toast.success("Login successful");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    const {error} = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed");
    }
    toast.success("Logged in with Google");
  };

  return (
    <div className=" mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-xl bg-white w-87.5 shadow">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email */}
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="relative">
            <legend>Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-full"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>

          {/* Login Button */}
          <button className="btn w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center justify-center gap-2 border"
        >
          <FaGoogle /> Login with Google
        </button>

        {/* Register Link */}
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
