import { PaperAirplaneIcon } from "@heroicons/react/outline"

export const TweetButton = ({ tweets }) => {
  return (
    <button className="mx-3 flex justify-center items-center bg-blue-500 text-gray-100 p-2 rounded-full w-full">
      <PaperAirplaneIcon className="h-6 w-6 mr-2" />
      Tweetear
    </button>
  )
}
