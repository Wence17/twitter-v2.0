'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, MagnifyingGlassCircleIcon, FaceSmileIcon, PhotoIcon, MapPinIcon } from '@heroicons/react/24/outline'

function Tweetbox() {

    const [Input, setInput] = useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
        <Image
            src='https://links.papareact.com/gll'
            alt=''
            width='14'
            height='14'
            className='h-14 w-14 object-cover rounded-full mt-4'
         />
        <div className='flex flex-1 items-center pl-2'>
            <form action="" className='flex flex-1 flex-col '>
                <input 
                    value={Input}
                    onChange={e =>setInput(e.target.value)}
                    type="text" 
                    placeholder="What's happening?!" 
                    className='h-24 text-xl outline-none placeholder:text-xl w-full'/>
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        {/* Icons */}
                        <PhotoIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <MagnifyingGlassCircleIcon className='h-5 w-5'/>
                        <FaceSmileIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <MapPinIcon className='h-5 w-5'/>
                    </div>
                    <button 
                        disabled={!Input}
                        className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40 disabled:cursor-not-allowed'>
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Tweetbox;