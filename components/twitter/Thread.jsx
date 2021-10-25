import { Tweet } from "./Tweet"

export const Thread = ({ tweets }) => {
  return (
    <div className="flex flex-col">
      {
        tweets
        ? tweets.map((text, i) => {
          return <Tweet key={i} text={text} />
        })
        : <Tweet />
      }
    </div>
  )
}