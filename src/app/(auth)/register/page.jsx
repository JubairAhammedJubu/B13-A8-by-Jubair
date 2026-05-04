"use client";
import {authClient} from "@/lib/auth-client";
import Link from "next/link";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegisterFunc = async (data) => {
    try {
      const result = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.photo,
        callbackURL: "/login",
      });

      if (result?.error) {
        toast.error(result.error.message);
      } else {
        toast.success("Registration successful!");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      toast.success("Logged in with Google");
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="mx-auto flex justify-center items-center bg-slate-100 p-5">
      <div className="p-6 rounded-xl bg-white w-100">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-500 text-center mb-2">{errorMsg}</p>
        )}

        <form className="space-y-2" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset>
            <legend>Name</legend>
            <input
              type="text"
              className="input w-full"
              {...register("name", {required: "Name is required"})}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset>
            <legend>Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              {...register("photo", {required: "Photo URL is required"})}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              className="input w-full"
              {...register("email", {required: "Email is required"})}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="relative">
            <legend>Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input w-full"
              {...register("password", {required: "Password is required"})}
            />
            <span
              className="absolute right-6 top-3 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white">
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full flex items-center justify-center gap-2 border"
        >
          <FaGoogle /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
