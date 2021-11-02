import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ExclamationCircleIcon, RefreshIcon } from '@heroicons/react/outline'
import { CANCEL_TRANSACTION, CONFIRM_TRANSACTION } from "../../../apollo/mutations";
import { pay } from "../../../redux/features/user/userSlice";
import { TOKEN } from "../../../config";
import { toast } from "react-toastify";

const Callback = () => {
  const router = useRouter()
  const [confirmTransaction, { loading, error }] = useMutation(CONFIRM_TRANSACTION);
  const [cancelTransaction] = useMutation(CANCEL_TRANSACTION);
  const dispatch = useDispatch()

  useEffect(() => {
    if(!router.isReady) return;
    (async () => {
      const { cancel, remote_id, transaction_uuid } = router.query
      const token = TOKEN

      if (cancel) {
        // cancel the payment
        try {
          const {
            data: {
              cancelTransaction: {
                status
              }
            }
          } = await cancelTransaction({
            variables: {
              token,
              remoteId: remote_id
            }
          })
          toast.info('Transacción cancelada 🥺👉🏻👈🏻')
        } catch (error) {
          console.log(error)
          toast.error('Ocurrió un error al cancelar la transacción 🤔')
        }
      } else {
        // proccess payment
        try {
          const {
            data: {
              confirmTransaction: {
                status
              }
            }
          } = await confirmTransaction({
            variables: {
              token,
              remoteId: remote_id,
              transactionUuid: transaction_uuid,
            }
          })
          if (status) {
            dispatch(pay(true))
            toast.info('Transacción procesada 🥳')
          }
          // redirect to home
        } catch (error) {
          console.log(error)
          toast.error('Ocurrió un error al procesar la transacción 🤔')
        }
      }
      router.push('/')
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
    {
      loading
      ? <div className="flex"><RefreshIcon className="h-8 w-8 animate-spin" /> Procesando...</div>
      : ''
    }
    {
      error
      ? <div className="flex"><ExclamationCircleIcon className="h-8 w-8" /> Error...</div>
      : ''
    }
      
    </div>
  )

}

export default Callback