import { Modal } from "../Modal"
import { useMutation } from '@apollo/client';
import { SCHEDULE_THREAD } from '../../apollo/mutations';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const SuccessScheduled = () => (
  <div>
    <p className="mb-3">Tweet agendado con éxito 🥳</p>
  </div>
)

export const ScheduleModal = ({ open, setOpen }) => {
  const [scheduleThread, { data, loading, error }] = useMutation(SCHEDULE_THREAD);

  const sendSheduled = () => {
    const pubDate = ''
    return scheduleThread({
      variables: {
        tweets,
        pubDate,
      }
    })
  }

  const handleClick = (e) => {
    // await toast.promise(
    //   sendSheduled,
    //   {
    //     pending: 'agendando hilo',
    //     success: {
    //       render({ data }) {
    //         return <SuccessScheduled />
    //       }
    //     },
    //     error: 'Ha ocurrido un error 🤯',
    //   }
    // )
    // setText('')
  }

  return (
    <Modal open={open} setOpen={setOpen} closeable icon='info'>
      datepicker
    </Modal>
  )
}
