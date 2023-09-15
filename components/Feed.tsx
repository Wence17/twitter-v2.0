'use client'
import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Tweetbox from "./Tweetbox";
import { Tweet } from "@/typings";
import TweetComponent from "./Tweet";
import { client } from "@/sanity/lib/client";
import { feedQuery } from "@/sanity/lib/queries";
import toast from "react-hot-toast";

function Feed({ tweets: tweetProps }: { tweets: Tweet[] }) {

  const [tweets, setTweets] = useState<Tweet[]>(tweetProps);

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreashing...')

    const tweets = await client.fetch(feedQuery);
    setTweets(tweets);

    toast.success('Feed is updated!', {
      id: refreshToast,
    })
  };
  return (
    <div className="col-span-7 lg:col-span-5 border-x overflow">
      <div className="flex items-center justify-between">
        <h1
          className="p-5 pb-0 text-xl font-bold
          "
        >
          Home
        </h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className="hr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      {/* Tweet box */}
      <div>
        <Tweetbox />
      </div>
      <div className="overflow-y-scroll">
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
