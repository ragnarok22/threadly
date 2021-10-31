import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"
import { ExclamationIcon, ExclamationCircleIcon, InformationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'

export const Modal = ({ open, setOpen, title, children, icon, cancelable, closeable, submitable }) => {
  const cancelButtonRef = useRef(null)

  const getIcon = () => {
    let iconType = <QuestionMarkCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-200" aria-hidden="true" />
    let bg_class = 'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10'
    let class_type = 'bg-gray-100 dark:bg-gray-900'
    if (icon === 'warning') {
      iconType = <ExclamationIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-200" aria-hidden="true" />
      class_type = 'bg-yellow-100 dark:bg-yellow-900'
    } else if (icon === 'info') {
      iconType = <InformationCircleIcon className="h-6 w-6 text-green-600 dark:text-green-200" aria-hidden="true" />
      class_type = 'bg-green-100 dark:bg-green-900'
    } else if (icon === 'error') {
      iconType = <ExclamationCircleIcon className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden="true" />
      class_type = 'bg-red-100 dark:bg-red-900'
    }
    return (
      <div className={`${bg_class} ${class_type}`}>
        {iconType}
      </div>
    )
  }

  const handleClose = (e) => {
    if (closeable) {
      setOpen(false)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={handleClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {getIcon()}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        { children }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {
                  cancelable &&
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                }
                {
                  submitable &&
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Enviar
                  </button>
                }
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )

}