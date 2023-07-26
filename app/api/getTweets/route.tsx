import { client } from '@/sanity/lib/client'
import { Tweet } from '@/typings'
import { groq } from 'next-sanity'

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



export async function GET(req: Request) {
    const tweets:Tweet[] = await client.fetch(feedQuery)
    console.log({tweets})

    return new Response(JSON.stringify({tweets}))
  }