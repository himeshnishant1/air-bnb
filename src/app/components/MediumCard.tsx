import React from 'react'
import { LiveExploreData } from '../interface/type'
import Image from 'next/image'

function MediumCard({img, title}: LiveExploreData) {
  return (
    <div className='cursor-pointer hover:scale-105
        transtion transform duration-200 ease-out'>
        <div className='relative h-80 w-80'>
        <Image
            className='rounded-xl'
            alt='meduim-card-img'
            src={img}
            layout='fill'
        />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>    
    </div>
  )
}

export default MediumCard
