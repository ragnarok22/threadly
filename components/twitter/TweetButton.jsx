import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { useMutation } from '@apollo/client';
import { TWEETER_TWEET } from '../../apollo/mutations';
import { toast } from "react-toastify";

export const TweetButton = ({ tweets, canTweet, setText }) => {
  const [tweetPost, { data, loading, error }] = useMutation(TWEETER_TWEET);

  const SuccessTweet = () => (
    <div>
      <p className="mb-3">Tweet enviado con éxito 🥳</p>
    </div>
  )

  const sendTweet = () => {
    // return new Promise(resolve => setTimeout(() => resolve("world"), 3000));
    return tweetPost({ variables: { thread: tweets } });
  }

  const displayTweet = async (e) => {
    e.preventDefault()
    await toast.promise(
      sendTweet,
      {
        pending: 'enviando tweets',
        success: {
          render({ data }) {
            return <SuccessTweet />
          }
        },
        error: 'Ha ocurrido un error 🤯',
      }
    )
    setText('')
  }

  return (
    <div className="mx-3 w-full">
      <button
        className="flex justify-center items-center bg-blue-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!canTweet}
        onClick={displayTweet}
      >
        <PaperAirplaneIcon className="h-6 w-6 mr-2" />
        {
          loading
          ? <p>loading...</p>
          : <p>Twittear</p>
        }
      </button>
    </div>
  )
}
