import Image from 'next/image'
import { useEffect, useState } from 'react'

const user = {
  name: 'Reinier Hernández',
  username: '@RagnarokReinier',
  imageUrl:
    'https://pbs.twimg.com/profile_images/1452697085745061889/_TKL0bmR_400x400.png',
}

export const Tweet = ({ text }) => {
  const COUNTER_MAX = 280
  const [counter, setCounter] = useState(COUNTER_MAX)

  useEffect(() => {
    setCounter(text?.length || 0)
  }, [text])

  return (
    <div className="flex pb-5">
      <div>
        <Image className="rounded-full" src={user.imageUrl} alt="" width='50px' height='50px' />
      </div>
      <div className="ml-3 flex-grow w-4/5">
        <div className="flex justify-between">
          <p className="font-bold">{user.name}</p>
          <p className="text-gray-500 font-light">{user.username}</p>
        </div>
        <p className={text ? '' : 'text-gray-400 font-light'}>
          {
            text
            ? text
            : 'Tu tweet aparecerá aquí'
          }
        </p>
        <p className={`text-right ${counter < COUNTER_MAX ? 'text-gray-300' : 'text-red-300' }`}>
          {counter}/{COUNTER_MAX}
        </p>
      </div>
    </div>
  )
}