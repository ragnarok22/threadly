// import { PlusCircleIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Tweet } from "./Tweet"

export const Thread = ({ tweets, canTweet, setText }) => {
  const user = useSelector((state) => state.user);

  // const addTeet = (e) => {
  //   setText(tweets + "\n\n\nstart here...")
  // }

  return (
    <div className="flex flex-col h-96 overflow-auto px-3">
      {
        tweets
        ? tweets.map((text, i) => {
          return <Tweet key={i} text={text} user={user} />
        })
        : <Tweet />
      }
      {/* <div className="flex justify-center items-center mt-0">
        <PlusCircleIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" onClick={addTeet} />
      </div> */}
    </div>
  )
}