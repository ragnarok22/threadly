import { useSelector } from "react-redux";
import { ScheduleButton } from "./ScheduleButton";
import { Tweet } from "./Tweet"
import { TweetButton } from "./TweetButton";

export const Thread = ({ tweets, canTweet, setText }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col h-96 overflow-auto">
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