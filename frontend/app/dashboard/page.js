/*

Navbar
- User info
- Home
- Usage
- Placeholder


Home:
  Search bar, filters
  List the devices grouped by filter selected as collapsible divs



Components for appliances:


 */
'use client';

import {useEffect, useState} from "react";

import NavBar from "@/components/NavBar";
import RoomCard from "@/components/RoomCard";
import roomData from "@/data/roomData";
import SearchBar from "@/components/SearchBar";

function Page() {
  const [data, setData] = useState({rooms: []});
//search setsearch
  const [search, setSearch]=useState('')
//results, setresults
  const [results, setResults]=useState('')
//useffect 
  useEffect(() =>{
    
  }
)

//filter data based on search, add to results via setresults
  useEffect(() => {
    setData(roomData.residences[0]);
    console.log(roomData.residences[0]);
  }, []);

  return (
    <main className="bg-slate-900 flex flex-col w-screen">
      <NavBar />
      <div>
        <SearchBar />
            {/*  Search bar and filters */}
      </div>
      <div>
        {data.rooms.map((room, index) => (
          <RoomCard key={index} data={room} />
        ))}
      </div>
    </main>
  )
}

export default Page;
