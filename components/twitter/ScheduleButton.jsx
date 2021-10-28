import { CalendarIcon } from '@heroicons/react/outline'

export const ScheduleButton = ({ tweets }) => {
  return (
    <button className="flex justify-center items-center">
      <CalendarIcon className="h-8 w-8" />
      Agendar
    </button>
  )
}
