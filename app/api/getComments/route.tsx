import { client } from '@/sanity/lib/client'
import { Comment, Tweet } from '@/typings'
import { NextApiRequest } from 'next';
import { groq } from 'next-sanity'





// tweetId = 'c06ba320-d371-4a1b-b1cb-45712b1e9dc6'
const commentQuery = groq`
    *[_type=='comment' && references(*[_type == 'tweet' && _id == $tweetId]._id)]{
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      comment,
      username,
      tweet,
      'profileImg': profileImg.asset->url,
      'alt': profileImg.alt,
        } | order(_createdAt desc)
`

type Data = Comment[];

export async function GET(req: Request) {
    
    const { tweetId } = req.query;
    const comments:Comment[] = await client.fetch(commentQuery,{
        tweetId,
    })
    return new Response(JSON.stringify(comments))
  }