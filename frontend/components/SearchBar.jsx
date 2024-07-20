'use client'
import React from 'react'
import Image from 'next/image'

export default function SearchBar({search, setSearch, handleSearch}) {

  return (
    <main className='bg-white flex flex-row rounded-md justify-center' onSubmit={handleSearch}>
        <div>
            <input 
            type='text'
            className='text-black text-xl flex'
            value={search}
            placeholder='Search device name'
            onChange={(e)=>setSearch(e.target.value)}
            >
            </input>

            <Image source={'../assets/search.png'} className="w-8 h-8" resizeMode="contain" />
            
        </div>
    </main>
  )
}
