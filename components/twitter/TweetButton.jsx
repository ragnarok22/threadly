import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { useMutation } from '@apollo/client';
import { TWEETER_TWEET } from '../../apollo/mutations';

export const TweetButton = ({ tweets, canTweet }) => {
  const [tweetPost, { data, loading, error }] = useMutation(TWEETER_TWEET);

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const {
        data
      } = await tweetPost({ variables: { tweets } });

      console.log(data)

      // if (status) {
      //   // clean 
      // }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      className="mx-3 flex justify-center items-center bg-blue-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!canTweet}
      onClick={handleClick}
    >
      <PaperAirplaneIcon className="h-6 w-6 mr-2" />
      Tweetear
    </button>
  )
}
