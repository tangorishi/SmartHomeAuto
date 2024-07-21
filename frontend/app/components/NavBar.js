"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
    const session = useSession();
    return <div className="px-8 py-8 w-full text-white gap-4">
        <div className="flex justify-between items-center">
            <div className=" flex justify-start items-center gap-2">
                <Image src={session.data.user.image} width="40" height="40" alt="profile image" className="rounded-full" />
                <div>
                    {session?.data.user.name}
                </div>
            </div>
            <div>
                <div className="flex justify-end gap-2  items-center">
                    {session.status == "unauthenticated" ?
                        <button className=" hover:scale-105" onClick={() => signIn()}>
                            Login
                        </button> : null
                    }
                    {session.status === "authenticated" ?
                        <button className=" hover:scale-105" onClick={() => signOut()}>
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

            </div>

        </div>
    </div>
}
