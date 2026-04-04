"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectRoot() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/create-project/info");
  }, [router]);

  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#1877F2] border-t-transparent"></div>
    </div>
  );
}
