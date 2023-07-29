'use client'
import { Comment, Tweet } from '@/typings'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-time-ago'
import { 
  ArrowUpTrayIcon, 
  ArrowsRightLeftIcon, 
  ChatBubbleLeftRightIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline'
import fetchComments from '@/utils/fetchComments'

// ___________________________________________________________________
import Timeago from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

Timeago.addDefaultLocale(en)
Timeago.addLocale(ru)

function Tweet({tweet}: {tweet: Tweet}) { 
  const [comments, setComments] = useState<Comment[]>([])
  const refreshComments = async () => {
    const comments:Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }

  useEffect(() => {
    refreshComments
  }, [])

  // console.log(comments)
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
              height={240}
              className='m-5 ml-0 mb-1 max-h-60 w-[420px] rounded-lg object-cover shadow-sm'
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
      {/* comment box logics */}

      {comments?.length > 0 && (
        <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
          {comments.map(comment => (
            <div key={comment._id} className='flex space-x-2'>
              <Image 
                src={comment.profileImg}
                alt={comment.alt}
                width={500}
                height={500}
                className='h-7 w-7 rounded-full object-cover'
              />
              <div>
                <div className='flex items-center space-x-1'>
                  <p className='mr-1 font-bold'>{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline'>
                    @{tweet.username.replace(/\s+/g, '').toLowerCase()} .
                  </p>
                  <TimeAgo 
                    className='text-sm text-gray-500'
                    date={comment._createdAt}
                    // timeStyle="twitter"
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet