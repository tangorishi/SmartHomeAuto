import Link from "next/link";

export function NavBar(){
    return <div className="px-8 py-8 w-full text-white flex justify-end gap-4 ">
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