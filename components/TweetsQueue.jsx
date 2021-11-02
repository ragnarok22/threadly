import { XCircleIcon, XIcon } from "@heroicons/react/outline"
import moment from "moment"

const TweetsQueue = ({ title, queues, showDate }) => {
  const handleDeleteQueue = (e, id) => {
    e.preventDefault()
    console.log("delete queue", id)
  }

  return (
    <div className="w-full px-5 lg:w-1/2">
      <h1 className="text-center text-2xl mt-5 mb-2">{ title }</h1>
      { 
        queues &&
        queues.length !== 0
        ? queues.map(queue => (
            <div className="w-full flex justify-between pb-1 border-b-2 mb-2" key={queue.id}>
              <div>
                {
                  JSON.parse(queue.tweets).map((text, i) => (
                    <p key={i} className="text-sm">{text}</p>
                  ))
                }
              </div>
              <div className="flex items-center">
                {
                  showDate
                  ? <p className="text-sm text-gray-400">{moment(queue.pubDate).format('DD/MM/YYYY HH:mm')}</p>
                  : <p className="text-sm text-gray-400">{moment(queue.pubDate).format('HH:mm')}</p>
                }
                <XCircleIcon
                  className="h-4 w-4 ml-3 text-red-600"
                  aria-hidden="true"
                  onClick={(e) => handleDeleteQueue(e, queue.id)}
                />
              </div>
            </div>
          ))
        : <p className="text-sm text-center text-gray-500 dark:text-gray-600">No hay tweets</p>
      }
    </div>
  )
}

export default TweetsQueue
