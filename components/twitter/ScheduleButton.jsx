import { CalendarIcon } from '@heroicons/react/outline'

export const ScheduleButton = ({ tweets }) => {
  return (
    <button
      className="mx-3 flex justify-center items-center bg-yellow-500 text-gray-100 p-2 rounded-full w-full"
    >
      <CalendarIcon className="h-6 w-6 mr-2" />
      Agendar
    </button>
  )
}
