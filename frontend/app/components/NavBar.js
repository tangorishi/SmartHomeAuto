"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
    const { data: session, status } = useSession();
    return (
        <div className="px-8 py-8 w-full text-white gap-4">
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                    {session && (
                        <>
                            <Image src={session.user.image} width="40" height="40" alt="profile image" className="rounded-full" />
                            <div>
                                {session.user.name}
                            </div>
                        </>
                    )}
                </div>
                <div className="flex-1 text-center flex items-center justify-center gap-2">
                    <Image src="/logoo.png" width="90" height="90" alt="TechGhar Logo" />
                    <h1 className="text-2xl font-bold">TechGhar</h1>
                </div>
                <div>
                    <div className="flex justify-end gap-2 items-center">
                        {status === "unauthenticated" ? (
                            <button className="hover:scale-105" onClick={() => signIn()}>
                                Login
                            </button>
                        ) : (
                            <button className="hover:scale-105" onClick={async () => await signOut()}>
                                Logout
                            </button>
                        )}
                        <div className="hover:scale-105">
                            <Link href="/dashboard">
                                Home
                            </Link>
                        </div>
                        <div className="hover:scale-110">
                            <Link href="/usage">
                                Consumption
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
