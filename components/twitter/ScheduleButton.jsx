import { useMutation } from '@apollo/client';
import { CalendarIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SCHEDULE_THREAD } from '../../apollo/mutations';

export const ScheduleButton = ({ tweets, canTweet, setText }) => {
  const user = useSelector((state) => state.user);
  const [pubDate, setPubDate] = useState()
  const [scheduleThread, { data, loading, error }] = useMutation(SCHEDULE_THREAD);

  const SuccessScheduled = () => (
    <div>
      <p className="mb-3">Tweet agendado con éxito 🥳</p>
    </div>
  )

  const sendSheduled = () => {
    const pubDate = ''
    return scheduleThread({
      variables: {
        tweets,
        pubDate,
      }
    })
  }

  const handleSchedule = async (e) => {
    e.preventDefault()
    try {
      await toast.promise(
        sendSheduled,
        {
          pending: 'agendando hilo',
          success: {
            render({ data }) {
              return <SuccessScheduled />
            }
          },
          error: 'Ha ocurrido un error 🤯',
        }
      )
      setText('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      className="mx-3 flex justify-center items-center bg-yellow-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
      // disabled={!canTweet || !user.isPremium}
      disabled={!canTweet}
      onClick={handleSchedule}
    >
      <CalendarIcon className="h-6 w-6 mr-2" />
      Agendar
    </button>
  )
}
