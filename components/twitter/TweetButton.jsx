import { PaperAirplaneIcon } from "@heroicons/react/outline"

export const TweetButton = ({ tweets }) => {
  return (
    <button className="flex justify-center items-center">
      <PaperAirplaneIcon className="h-8 w-8" />
      Tweetear
    </button>
  )
}
