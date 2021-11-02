import Image from 'next/image'
import { useEffect, useState } from 'react'
import { COUNTER_MAX } from '../../config'

export const Tweet = ({ text, user }) => {
  const [counter, setCounter] = useState(COUNTER_MAX)

  useEffect(() => {
    setCounter(text?.length || 0)
  }, [text])

  return (
    <div className="flex pb-5">
      <div className="w-1/5">
        <Image className="rounded-full" src={user.imageUrl} alt="" width='50px' height='50px' />
      </div>
      <div className="flex-grow w-4/5">
        <div className="flex justify-between">
          <p className="font-bold w-full flex-grow">{user.firstName}</p>
          <p className="text-gray-500 font-light overflow-hidden overflow-ellipsis">@{user.username}</p>
        </div>
        <p className={text ? '' : 'text-gray-400 font-light'}>
          {
            text
            ? text
            : 'Tu tweet aparecerá aquí'
          }
        </p>
        <p className={`text-right ${counter <= COUNTER_MAX ? 'text-gray-300' : 'text-red-300' }`}>
          {counter}/{COUNTER_MAX}
        </p>
      </div>
    </div>
  )
}