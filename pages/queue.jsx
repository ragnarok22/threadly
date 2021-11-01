import { useQuery } from "@apollo/client"
import moment from "moment"
import { useEffect, useState } from "react"
import { GET_QUEUES } from "../apollo/queries"
import { NavBarLayout } from "../components/layouts/NavBar"
import TweetsQueue from "../components/TweetsQueue"
import Link from 'next/link'
import { LightningBoltIcon } from "@heroicons/react/outline"
import { useSelector } from "react-redux"

const Queue = () => {
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useQuery(GET_QUEUES)
  const [queues, setQueues] = useState([])
  const [today, setToday] = useState()
  const [tomorrow, setTomorrow] = useState()

  useEffect(() => {
    if (data) {
      const { queues } = data
      const today = queues.filter(queue => moment(queue.pubDate).isSame(moment(), "day"))
      setToday(today)
      const tomorrow = queues.filter(queue => moment(queue.pubDate).isSame(moment().add(1, "day"), "day"))
      setTomorrow(tomorrow)
      const next_queues = queues.filter(queue => {
        return !tomorrow.includes(queue) && !today.includes(queue)
      })
      setQueues(next_queues)
    }
  }, [data, loading, error])

  return (
    <NavBarLayout className="flex-col">
      <div className="w-full flex flex-col items-center">
        {
          !user.isPremium &&
          <div className="flex items-center bg-gray-200 rounded-lg p-5 dark:bg-gray-700">
            <div>
              <h1 className="font-bold text-2xl">Distribuye tu contenido</h1>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Esto es una funcionalidad de pago</p>
            </div>
            <Link href="/prices">
              <a className="flex items-center ml-5 rounded-full bg-green-600 p-2 text-white text-sm">
                <LightningBoltIcon className="h-6 w-6" aria-hidden="true" /> Actualiza tu plan
              </a>
            </Link>
          </div>
        }
        <TweetsQueue title="Hoy" queues={today} />
        <TweetsQueue title="Mañana" queues={tomorrow} />
        <TweetsQueue title="Próximos hilos" queues={queues} showDate />
      </div>
    </NavBarLayout>
  )
}

export default Queue