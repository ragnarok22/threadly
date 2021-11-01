import moment from "moment"

const TweetsQueue = ({ title, queues }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-center text-2xl mt-5 mb-2">{ title }</h1>
      { queues &&
        queues.map(queue => (
          <div className="w-full flex justify-between pb-1 border-b-2 mb-2" key={queue.id}>
            <div>
              {
                JSON.parse(queue.tweets).map((text, i) => (
                  <p key={i} className="text-sm">{text}</p>
                ))
              }
            </div>
            <p className="text-sm text-gray-400">{moment(queue.pubDate).format('HH:mm')}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TweetsQueue
