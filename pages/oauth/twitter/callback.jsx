import { useEffect } from "react"
import { useRouter } from 'next/router'

const Callback = () => {
  const router = useRouter()
  const {oauth_token, oauth_verifier} = router.query

  useEffect(() => {
    // check get params
    // make a mutation
    // redirect to home
  })

  return (
    <div>
      <p>{oauth_token}</p>
      <p>{oauth_verifier}</p>
    </div>
  )
}

export default Callback