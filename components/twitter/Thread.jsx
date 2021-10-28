import { useSelector } from "react-redux";
import { Tweet } from "./Tweet"

export const Thread = ({ tweets }) => {
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
    </div>
  )
}