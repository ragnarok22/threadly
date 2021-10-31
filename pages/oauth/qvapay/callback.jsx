import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RefreshIcon } from '@heroicons/react/outline'
import { CONFIRM_TRANSACTION } from "../../../apollo/mutations";
import { pay } from "../../../redux/features/user/userSlice";

const Callback = () => {
  const router = useRouter()
  const [confirmTransaction, { data, loading, error }] = useMutation(CONFIRM_TRANSACTION);
  const dispatch = useDispatch()
  const [talla, setTalla] = useState()

  useEffect(() => {
    (async () => {
      const { cancel, remote_id, transaction_uuid, token } = router.query
      setTalla({
        cancel, remote_id, transaction_uuid
      })

      if (cancel) {
        router.push('/')
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
              transaction_uuid: transactionUuid,
            }
          })
          if (status) {
            dispatch(pay(status))
          }
          // redirect to home
          router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    })()
  })

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <RefreshIcon className="h-8 w-8 animate-spin" /> Procesando...
      {JSON.stringify(talla)}
    </div>
  )

}

export default Callback