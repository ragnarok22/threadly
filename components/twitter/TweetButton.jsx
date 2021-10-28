import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { COUNTER_MAX } from "../../config"

export const TweetButton = ({ tweets, canTweet }) => {

  return (
    <button
      className="mx-3 flex justify-center items-center bg-blue-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!canTweet}
    >
      <PaperAirplaneIcon className="h-6 w-6 mr-2" />
      Tweetear
    </button>
  )
}
