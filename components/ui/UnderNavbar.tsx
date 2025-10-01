"use client";
import { Clipboard, ListPlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UnderNavbar() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div className=" border-b border-gray-200 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl h-10 sm:h-10 lg:h-12 flex items-center  gap-5">
        <Link
          className={`${
            currentPath === "/" && "activeLink"
          } flex items-center gap-2 `}
          href={"/"}
        >
          <Clipboard
            className={` h-4 w-4 ${currentPath === "/" && "text-cyan-700"} `}
          />
          All Post
        </Link>
        <Link
          className={`${
            currentPath === "/featurerequest" && "activeLink"
          } flex items-center gap-2 `}
          href={"/featurerequest"}
        >
          <ListPlusIcon
            className={` h-4 w-4 ${
              currentPath === "/featurerequest" && "text-cyan-700"
            } `}
          />
          Feature Request
        </Link>
      </div>
    </div>
  );
}
