import { useEffect, useState } from "react"
import { COUNTER_MAX } from "../config"
import { Thread } from "./twitter/Thread"

export const Preview = ({ className, fullText }) => {
  const [tweets, setTweets] = useState([])
  const [canTweet, setCanTweet] = useState(true)

  useEffect(() => {
    if (fullText && fullText !== '') {
      const procesed = fullText.split('\n')
      const temp = []
      for(let i = 0; i < procesed.length; i++) {
        temp.push(procesed[i])
      }
      setTweets(temp)
      for(let i = 0; i < procesed.length; i++) {
        if (procesed[i].length > COUNTER_MAX) {
          setCanTweet(false)
          break
        }
        setCanTweet(true)
      }
    } else {
      setTweets([""])
      setCanTweet(true)
    }
  }, [fullText])

  return (
    <div className={`${className} overflow-auto relative`} style={{maxHeight: '90vh'}}>
      <h1 className="text-center text-xl mb-1">Vista previa</h1>
      <Thread tweets={tweets} canTweet={canTweet} /> 
    </div>
  )
}
