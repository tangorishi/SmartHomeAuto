"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export function NavBar(){
    const session = useSession();
    return <div className="px-8 py-8 w-full text-white flex justify-end gap-4 ">
        <div>{session.data.user?.name.split(" ")[0]}</div>
        <div className=" hover:scale-105">
            <Link href="/dashboard">
            Home
            </Link>
        </div>
        <div className=" hover:scale-110">
            <Link href="/usage">
            Consumption
            </Link>
        </div>
    </div>
}