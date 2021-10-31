import { CalendarIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import { ScheduleModal } from './ScheduleModal';

export const ScheduleButton = ({ tweets, canTweet, setText }) => {
  // const user = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault()
    setOpenModal(true)
  }

  return (
    <div className="flex justify-center w-full mx-3">
      <ScheduleModal
        open={openModal}
        tweets={tweets}
        setOpen={setOpenModal}
        setText={setText}
      />

      <button
        className="w-full flex justify-center items-center bg-yellow-500 text-gray-100 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        // disabled={!canTweet || !user.isPremium}
        disabled={!canTweet}
        onClick={handleClick}
      >
        <CalendarIcon className="h-6 w-6 mr-2" />
        Agendar
      </button>
    </div>
  )
}
