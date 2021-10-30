import { CalendarIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux';

export const ScheduleButton = ({ tweets, canTweet }) => {
  const user = useSelector((state) => state.user);
  return (
    <button
      className="mx-3 flex justify-center items-center bg-yellow-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!canTweet || !user.isPremium}
    >
      <CalendarIcon className="h-6 w-6 mr-2" />
      Agendar (pronto)
    </button>
  )
}
