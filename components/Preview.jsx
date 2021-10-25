import { useState } from "react"
import { Thread } from "./twitter/Thread"

export const Preview = ({ className }) => {
  const [tweets, setTweets] = useState([
      'hola mundo',
      'como estas en este maravilloso día'
  ])
  return (
    <div className={`${className} overflow-auto`} style={{maxHeight: '90vh'}}>
      <h1 className="text-center text-2xl">Vista previa</h1>
      <Thread tweets={tweets} /> 
    </div>
  )
}
