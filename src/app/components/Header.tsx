'use client';

import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Header({placeholder}: {placeholder?: string}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const resetInput = (e: any) => {
    setSearchInput("");
  }; 

  const search = () => {
    const queryParams = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests: noOfGuests.toString(),
    }).toString();
    setSearchInput("");
    router.push(`/search?${queryParams}`);
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate || new Date());
    setEndDate(ranges.selection.endDate || new Date());
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Link href={'/'}>
          <Image
            alt='logo'
            src={'https://links.papareact.com/qd3'}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
        />
        </Link>
      </div>
      <div className='flex flex-row justify-center md:border-1 rounded-full py-2'>
        <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='pl-5 flex-grow w-[85%] outline-0 bg-transparent text-gray-600 placeholder-gray-400' placeholder={placeholder || 'Start your search'}/>
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6'/>
        <div className='flex flex-row items-center space-x-2 border-1 p-2 rounded-full'> 
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto' >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5'/>
            <input min={1} value={noOfGuests} onChange={(e: any) => setNoOfGuests(e.target.value)} className='w-12 pl-2 text-lg text-red-400 outline-none' type='number'/>
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='cursor-pointer flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className='cursor-pointer flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;


