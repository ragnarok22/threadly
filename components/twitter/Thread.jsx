import { useSelector } from "react-redux";
import { ScheduleButton } from "./ScheduleButton";
import { Tweet } from "./Tweet"
import { TweetButton } from "./TweetButton";

export const Thread = ({ tweets, canTweet }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col">
      {
        tweets
        ? tweets.map((text, i) => {
          return <Tweet key={i} text={text} user={user} />
        })
        : <Tweet />
      }
      <div className="flex justify-around absolute bottom-0 w-full">
        <TweetButton tweets={tweets} canTweet={canTweet} />
        <ScheduleButton tweets={tweets} canTweet={canTweet} />
      </div>
    </div>
  )
}