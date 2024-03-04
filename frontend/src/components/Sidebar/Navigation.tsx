"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Home, Music4 } from "lucide-react";
type Props = {};

const Navigation = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className=" px-6">
      <ul className=" flex flex-col my-6 gap-3">
        <li className="">
          <Link
            href={"/"}
            className={`${pathname == "/" ? "active bg-green-500 right-6 relative rounded-r-xl pl-6" : ""} py-1 flex gap-3`}
          >
            <Home size={22}/>
            <div>Home</div>
          </Link>
        </li>
        <li className="">
          <Link
            href={"/music"}
            className={`${pathname == "/music" ? "active bg-green-500 right-6 relative rounded-r-xl pl-6" : ""} py-1 flex gap-3`}
          >
            <Music4 size={22}/>
            <div>Music</div>
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Navigation;
