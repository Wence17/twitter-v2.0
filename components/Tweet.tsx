import { Tweet } from '@/typings'
import Image from 'next/image'
import React from 'react'

function Tweet({tweet}: {tweet: Tweet}) { 
  return (
    <div>
        <div>
            <Image 
              src={tweet.profileImg} 
              alt={tweet.profAlt}
              width={50}
              height={50}
            />
            <div>
              <div>
                <p>{tweet.username}</p>
                <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet