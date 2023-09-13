import { groq } from "next-sanity";
import { client } from "./client";

// Get all posts
export const feedQuery = groq`
*[_type=='tweet' && !blockTweet]{
  ...,
  'profileImg': profileImg.asset->url,
  'profAlt': profileImg.alt,
  'alt': image.alt,
  'image': image.asset->url,
  'comments': *[_type == 'comment' && tweet._ref == ^._id]{
      ...,
      'profileImg': profileImg.asset->url,
      'alt': profileImg.alt,
    }
} | order(_createdAt desc)
`
// 'comments': *[_type == 'comment' && post._ref == ^._id]{
interface CommentData {
  name: string //from the username or login details if there is no username
  email: string //from the login details
  comment: string
}

// create Comment
export const createComment = async (
  commentData: CommentData,
  postId: string
) => {
  try {
    const response = await client.create({
      _type: 'comment',
      ...commentData,
      post: {
        _type: 'reference',
        _ref: postId,
      },
    })

    return response
  } catch (error) {
    console.error('Error creating comment:', error)
  }
}
