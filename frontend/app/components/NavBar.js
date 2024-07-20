"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function NavBar() {
    const session = useSession();
    return <div className="px-8 py-8 w-full text-white flex justify-end gap-4 ">
        <div className="flex flex-start ">
            {session.status=="unauthenticated"?
            <button className=" hover:scale-105" onClick={()=>signIn()}>
                    Login
            </button>:null
        }
        </div>
        {session.status === "authenticated" ?
            <button className=" hover:scale-105" onClick={()=>signOut()}>
                    Logout
            </button> : null
        }
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
