import Feed from '@/components/Feed'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import { fetchTweets } from '@/utils/fetchTweets';
import { groq } from 'next-sanity';
import { Tweet } from '@/typings';
import { client } from '@/sanity/lib/client';
// import { PortableText } from '@portabletext/react';

const feedQuery = groq`
*[_type=='tweet' && !blockTweet]{
  _id,
  _createdAt,
  _updatedAt,
  _rev,
  _type,
  blockTweet,
  text,
  username,
  'profileImg': profileImg.asset->url,
  'profAlt': profileImg.alt,
  'alt': image.alt,
  'image': image.asset->url,
} | order(_createdAt desc)
`






export default async function Home() {
  
  const tweets:Tweet[] = await client.fetch(feedQuery)

  // const tweets = await fetchTweets();


  return (
  <div className='max-h-screen overflow-hidden lg:max-w-6xl mx-auto'>
    <main className='grid grid-cols-9'>
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed tweets = {tweets}/>

      {/* widgets */}
      <Widgets />

    </main>
  </div>
    
  )
}
