"use client";

import { usePathname, useRouter } from "next/navigation";

export function RouteToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isEditPage = pathname === "/edit";

  const handleToggle = () => {
    router.push(isEditPage ? "/" : "/edit");
  };

  return (
    <button
      onClick={handleToggle}
      className='fixed z-9999 bottom-6 right-6 z-50 rounded-lg bg-black px-4 py-2 text-white shadow-lg transition hover:bg-gray-800'
    >
      {isEditPage ? "Show Preview" : "Edit Page"}
    </button>
  );
}
