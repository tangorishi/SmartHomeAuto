"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Signin() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-300 bg-cover bg-center" style={{ backgroundImage: 'url("bg2.webp")', backgroundSize: "cover" }}>
            <div className="grid gap-6 mb-6 border px-4 py-8 rounded-xl shadow-lg bg-white">
                <div className="text-center font-medium text-4xl col-span-2 text-black px-3">
                    Register For Free
                </div>
                <button
                    onClick={async () => {
                        await signIn("google", { callbackUrl: 'http://localhost:3000/dashboard' });
                    }}
                    className="hover:shadow-md text-center border border-gray-300 p-2.5 rounded-lg bg-gray-50 flex justify-center items-center gap-3 col-span-2"
                >
                    <Image src="/logo.png" width="30" height="30" alt="google logo" />
                    <div className="text-black">Sign in with Google</div>
                </button>
            </div>
        </div>
    );
}

