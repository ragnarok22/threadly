import { useSelector } from "react-redux";
import { Tweet } from "./Tweet"

export const Thread = ({ tweets, canTweet, setText }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col h-96 overflow-auto px-3">
      {
        tweets
        ? tweets.map((text, i) => {
          return <Tweet key={i} text={text} user={user} />
        })
        : <Tweet />
      }
    </div>
  )
}