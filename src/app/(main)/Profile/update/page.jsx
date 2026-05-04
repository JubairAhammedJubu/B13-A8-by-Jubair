"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {authClient} from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await authClient.updateUser({
        name: data.name,
        image: data.image,
      });

      if (res?.data?.status) {
        toast.success("Profile updated successfully!");
        router.push("/profile");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-base-200 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md bg-base-100 my-4 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Update Information</h2>

        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", {required: "Name is required"})}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="label">Profile Image URL</label>
          <input
            type="url"
            className="input input-bordered w-full"
            {...register("image", {required: "Image URL is required"})}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn bg-linear-to-r from-indigo-500 to-purple-600 text-white w-full"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
