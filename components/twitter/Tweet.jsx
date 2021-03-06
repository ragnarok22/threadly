import { BadgeCheckIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { COUNTER_MAX } from '../../config'
import styles from '../../styles/Tweet.module.css'

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
          <p className="font-bold w-full flex-grow flex">
            {user.firstName} 
            {
              user.isPremium &&
              <BadgeCheckIcon className="h-6 w-6" aria-hidden="true" />
            }
          </p>
          <p className="text-gray-500 font-light overflow-hidden overflow-ellipsis">@{user.username}</p>
        </div>
        <div className={text ? '' : 'text-gray-400 font-light'}>
          {
            text
            ? <pre className={styles.tweet}>{text}</pre>
            : 'Tu tweet aparecerá aquí'
          }
        </div>
        <p className={`text-right ${counter <= COUNTER_MAX ? 'text-gray-300' : 'text-red-300' }`}>
          {counter}/{COUNTER_MAX}
        </p>
      </div>
    </div>
  )
}