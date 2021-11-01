import moment from "moment"

const TweetsQueue = ({ title, queues }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-center text-2xl mt-5 mb-2">{ title }</h1>
      { queues &&
        queues.map(queue => (
          <div className="w-full flex justify-between" key={queue.id}>
            <h2 className="text-sm">{JSON.parse(queue.tweets).join('')}</h2>
            <p className="text-sm text-gray-400">{moment(queue.pubDate).format('HH:mm')}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TweetsQueue
