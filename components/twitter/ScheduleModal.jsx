import { useState } from 'react'
import { Modal } from "../Modal"
import { useMutation } from '@apollo/client';
import { SCHEDULE_THREAD } from '../../apollo/mutations';
import { toast } from 'react-toastify';
import moment from "moment"
import { parseDateTime } from '../utils';
import { GET_QUEUES } from '../../apollo/queries';

const SuccessScheduled = () => (
  <div>
    <p className="mb-3">Tweet agendado con éxito 🥳</p>
  </div>
)

export const ScheduleModal = ({ tweets, open, setOpen, setText }) => {
  const [pubDate, setPubDate] = useState(moment(moment()).add(1, 'days'));
  const [scheduleThread, { data, loading, error }] = useMutation(SCHEDULE_THREAD, {
    refetchQueries: [
      { query: GET_QUEUES}
    ],
  });

  const sendSheduled = async () => {
    console.log(parseDateTime(pubDate))
    console.log(tweets)
    return scheduleThread({
      variables: {
        tweets,
        pubDate: pubDate,
      }
    })
  }

  const handleClick = async (e) => {
    e.preventDefault()
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
    setOpen(false)
    setText('')
  }

  const handleUpdateDate = (e) => {
    const value = e.target.value
    const date = new Date(value)
    console.log(value)
    console.log(date)
    setPubDate(date)
    console.log(pubDate)
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      closeable
      cancelable
      submitable
      onSubmit={handleClick}
      icon='info'
      title='¿Deseas agendar este hilo?'
    >
      <p className="text-xl mb-5">Seleccione la fecha de publicación</p>
      <div className="mb-3 flex items-stretch justify-between">
        <input
          type="datetime-local"
          value={parseDateTime(pubDate)}
          min={parseDateTime(new Date())}
          onChange={handleUpdateDate}
          className="p-3 rounded-full bg-gray-300 dark:bg-gray-600"
          />
      </div>
    </Modal>
  )
}
