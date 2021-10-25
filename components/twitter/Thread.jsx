import { Tweet } from "./Tweet"

export const Thread = ({ tweets }) => {
  return (
    <div className="flex flex-col">
      {
        tweets
        ? <p>hay tweets</p>
        : <Tweet />
      }
    </div>
  )
}