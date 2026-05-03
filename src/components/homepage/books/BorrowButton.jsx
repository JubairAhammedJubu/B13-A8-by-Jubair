"use client";

import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";
import {authClient} from "@/lib/auth-client";

const BorrowButton = ({book}) => {
  const router = useRouter();

  const handleBorrow = async () => {
    const session = await authClient.getSession();

    console.log("SESSION:", session);

    if (!session?.data?.user) {
      router.push("/login");
      return;
    }

    console.log("BORROW SUCCESS");
    toast.success("Book borrowed successfully!");
  };

  return (
    <button onClick={handleBorrow} className="btn w-40 bg-blue-600 text-white">
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
