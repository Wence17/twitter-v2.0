'use client'
import { Tweet } from '@/typings'
import Image from 'next/image'
import React from 'react'
import TimeAgo from 'react-time-ago'
// ___________________________________________________________________
import Timeago from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import { ArrowUpTrayIcon, ArrowsRightLeftIcon, ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'

Timeago.addDefaultLocale(en)
Timeago.addLocale(ru)

function Tweet({tweet}: {tweet: Tweet}) { 
  return (
    <div className='flex flex-col space-x-3 p-5 border-y border-gray-100'>
        <div className='flex space-x-3'>
            <Image 
              src={tweet.profileImg} 
              alt={tweet.profAlt}
              width={500}
              height={500}
              className='h-10 w-10 rounded-full object-cover'
            />
            <div>
              <div className='flex items-center space-x-1'>
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>
                  @{tweet.username.replace(/\s+/g, '').toLowerCase()}  .
                </p>

                <TimeAgo 
                  className='text-sm text-gray-500'
                  date={tweet._createdAt}
                  // timeStyle="twitter"
                />
              </div>
              <p className='pt-1'>{tweet.text}</p>
              {tweet.image && (
                <Image 
                  src={tweet.image}
                  alt={tweet.alt}
                  width={420}
                  height={500}
                  className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'
                />
              )}
            </div>
        </div>
        <div className='flex justify-between mt-5'>
          <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
            <ChatBubbleLeftRightIcon className='h-5 w-5'/>
            <p>5</p>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
            <ArrowsRightLeftIcon className='h-5 w-5'/>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
            <HeartIcon className='h-5 w-5'/>
          </div>
          <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
            <ArrowUpTrayIcon className='h-5 w-5'/>
          </div>
        </div>
    </div>
  )
}

export default Tweet