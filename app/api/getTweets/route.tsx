import { NextResponse, NextRequest } from 'next/server'
import { client } from '@/sanity/lib/client'
import { Tweet } from '@/typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
    *[_type=='tweet' && !blockTweet]{
      _id,
      'alt': image.alt,
      'image': image.asset->url,
      content,
      ...
    } | order(_createdAt desc)
`

type Data = {
    tweets: Tweet[]
}

// export function GET(){
//     return NextResponse.json({ name: 'John Doe' })
// }

export async function GET(request: Request) {
    const tweets:Tweet[] = await client.fetch(feedQuery)
    console.log(tweets)

    return NextResponse.json({tweets})
  }