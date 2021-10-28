import { CalendarIcon } from '@heroicons/react/outline'

export const ScheduleButton = ({ tweets, canTweet }) => {
  return (
    <button
      className="mx-3 flex justify-center items-center bg-yellow-500 text-gray-100 p-2 rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed"
      // disabled={!canTweet}
      disabled={true}
    >
      <CalendarIcon className="h-6 w-6 mr-2" />
      Agendar (pronto)
    </button>
  )
}
