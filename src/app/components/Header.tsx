import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
            alt='logo'
            src={'https://links.papareact.com/qd3'}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
        />
      </div>
      <div className='flex flex-row justify-center md:border-1 rounded-full py-2'>
        <input type="text" className='pl-5 flex-grow w-[85%] outline-0 bg-transparent text-gray-600 placeholder-gray-400' placeholder='Start your search'/>
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
    </header>
  )
}

export default Header
