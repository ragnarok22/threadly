import { CheckIcon } from "@heroicons/react/outline"
import { useState } from "react"
import bgimg from '../public/img/bgimg.png'
import { NavBarLayout } from "../components/layouts/NavBar"
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE } from "../apollo/mutations";
import { useRouter } from "next/router";

const Prices = () => {
  const [text, setText] = useState('Anual')
  const monthlyPrice = 7
  const yearlyPrice = 70
  const [price, setPrice] = useState(yearlyPrice)
  const [createInvoice, { data, loading, error }] = useMutation(CREATE_INVOICE)
  const router = useRouter()
  const selected = 'bg-green-700 text-white'
  const common = ' focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none text-base leading-none rounded-full py-4 px-6 dark:text-gray-100'
  const isMonthlySelected = () => {
    return price === monthlyPrice
  }

  const changeToMonthly = () => {
    setPrice(monthlyPrice)
    setText('Mensual')
  }

  const changeToYearly = () => {
    setPrice(yearlyPrice)
    setText('Anual')
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const billingType = isMonthlySelected() ? 'monthly' : 'yearly'
    console.log(billingType)
    try {
      const {
        data: {
          createInvoice: { url },
        },
      } = await createInvoice({
        variables: {
          billingType,
        }
      })
      router.push(url)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <NavBarLayout>
      <div className="xl:mx-auto xl:container py-8 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base leading-4 text-gray-600 dark:text-gray-300">Elige un plan que se adecue a ti</p>
            <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800 dark:text-gray-100">
              Elige tu plan
            </h1>
            <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600 dark:text-gray-300">
            Comienza a gestionar tu contenido en Twitter de una forma fácil y sencilla. Trabajamos para que puedas gestionar mejor tu contenido en Twitter
            </p>
            <div className="w-56">
              <div className="bg-gray-100 dark:bg-gray-600 shadow rounded-full flex items-center mt-10">
                <button onClick={changeToMonthly} className={isMonthlySelected() ? selected + common : common}>
                    Mensual
                </button>
                <button onClick={changeToYearly} className={isMonthlySelected() ? common : selected + common}>
                  Anual
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
            {/* <img src={bgimg} className="absolute w-full -ml-12 mt-24" alt="background circle images" /> */}
            <div role="listitem" className="bg-white dark:bg-gray-600 shadow rounded-lg p-8 relative z-30">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800 dark:text-gray-100">Starter</h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800 dark:text-gray-100">FREE</p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">
                Una forma sencilla de publicar tus hilos de forma organizada
              </p>
              <ul className="mt-3 text-base text-gray-600 dark:text-gray-100">
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Publica todos los tweets que desees
                </li>
                <li className="flex">
                  <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Publica y crea hilos ilimitados
                </li>
              </ul>
            </div>
            <div role="listitem" className="bg-white dark:bg-gray-600 shadow rounded-lg mt-3 flex relative z-30">
              <div className="w-2.5  h-auto bg-green-700 rounded-tl-md rounded-bl-md" />
              <div className="flex flex-col w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800 dark:text-gray-100">Branding</h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-gray-100">
                    ${price}<span className="font-normal text-base">/{text}</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">
                  Para personas que quieran organizar su contenido y trabajar su marca personal
                </p>
                <ul className="mt-3 text-base text-gray-600 dark:text-gray-100">
                  <li className="flex">
                    <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Publica todos los tweets que desees
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Publica y crea hilos ilimitados
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Programar todos los tweets que desees
                  </li>
                  <li className="flex">
                    <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-300 mr-2" aria-hidden="true" /> Programa hasta 20 hilos
                  </li>
                </ul>
                <a className="w-full border-2 cursor-pointer border-green-600 rounded text-center p-3 mt-5" onClick={handleClick}>
                  {loading ? 'loading' : 'Obtener ahora' }
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBarLayout>
  )
}

export default Prices