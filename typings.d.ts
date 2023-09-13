export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = {
    comments
    text: string
    username: string
    profileImg: string
    image: string
    profAlt:string
    alt:string
}


export type commentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
    alt:string
}
export interface Comment extends commentBody  {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    tweet:{
        _ref: string
        _type: 'reference'
    }
}