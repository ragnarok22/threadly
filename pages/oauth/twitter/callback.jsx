import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useMutation } from "@apollo/client"
import { TWITTER_TOKEN } from "../../../apollo/mutations"
import { useDispatch } from "react-redux"
import { login } from "../../../redux/features/user/userSlice"
import { toast } from "react-toastify"
import { ExclamationCircleIcon, RefreshIcon } from "@heroicons/react/outline"

const Callback = () => {
  const router = useRouter()
  const [twitterToken, { data, loading, error }] = useMutation(TWITTER_TOKEN);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      // check get params
      const {oauth_token, oauth_verifier, denied} = router.query
      if (denied) {
        // show error
        toast.warning('Para usar Threadly App debes aceptar')
      } else if (oauth_token && oauth_verifier) {
        try {
          // make a mutation
          const { data: { tokenAuth: { status, token, user } } } = await twitterToken({ variables: { token: oauth_token, verifier: oauth_verifier }})
          if (status) {
            // save token and user
            user.token = token
            dispatch(login(user))
            toast.info('Bienvenido a Threadly App')
            // redirect to home
            router.push('/')
          }
        } catch (error) {
          console.log(error)
          toast.error('Error al iniciar sesión')
        }
      } else {
        router.push('/')
      }
    })()
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