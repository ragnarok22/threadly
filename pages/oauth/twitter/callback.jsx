import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useMutation } from "@apollo/client"
import { TWITTER_TOKEN } from "../../../apollo/mutations"
import { useDispatch } from "react-redux"
import { login } from "../../../redux/features/user/userSlice"

const Callback = () => {
  const router = useRouter()
  const [twitterToken, { data, loading, error }] = useMutation(TWITTER_TOKEN);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      // check get params
      const {oauth_token, oauth_verifier, denied} = router.query
      if (denied) {
        // show error
      } else if (oauth_token && oauth_verifier) {
        try {
          // make a mutation
          const { data: { tokenAuth: { status, token, user } } } = await twitterToken({ variables: { token: oauth_token, verifier: oauth_verifier }})
          if (status) {
            // save token and user
            user.token = token
            dispatch(login(user))
            // redirect to home
            router.push('/')
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        router.push('/')
      }
    })()
  })

  return (
    <div>
      <p>.</p>
    </div>
  )
}

export default Callback