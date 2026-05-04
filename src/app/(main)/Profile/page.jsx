"use client";

import {authClient} from "@/lib/auth-client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import userImg from "@/assets/user.png";

const ProfilePage = () => {
  const {data, isLoading} = authClient.useSession();
  const router = useRouter();

  const user = data?.user;


  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }


  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p>User not found. Please login again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl m-5 border border-base-300">
        {/* Avatar */}
        <div className="flex flex-col items-center pt-8 space-y-2">
          <div className="rounded-full">
            <Image
              src={user?.image || userImg}
              alt={user?.name || "User"}
              width={150}
              height={150}
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-xl font-bold">{user?.name || "Unknown User"}</h2>
        </div>

        {/* Actions */}
        <div className="card-body pt-0 items-center">
          <button
            onClick={() => router.push("/profile/update")}
            className="btn bg-linear-to-r from-indigo-500 to-purple-600 text-white"
          >
            Profile Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
