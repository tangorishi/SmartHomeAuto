'use client'
import React from 'react'
import Image from 'next/image'
import searchIcon from '@/assets/search.png'

export default function SearchBar({search, setSearch, handleSearch}) {

  return (
    <main className='flex flex-row ' onSubmit={handleSearch}>
        <div className=' bg-white flex rounded-lg justify-start w-96'>

        <Image src={searchIcon} className="w-8 h-8" resizeMode="contain" />

            <input 
            type='text'
            className='text-black text-xl flex ml-10 pl-3'
            value={search}
            placeholder='Search device name'
            onChange={(e)=>setSearch(e.target.value)}
            >
            </input>

                        
        </div>
    </main>
  )
}
