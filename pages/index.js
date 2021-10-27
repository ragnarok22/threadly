import { useState } from "react"
import { NavBarLayout } from "../components/layouts/NavBar"
import { Preview } from "../components/Preview"
import { Writter } from "../components/Writter"

export default function Home({ user }) {
  const [text, setText] = useState()

  return (
    <NavBarLayout user={ user }>
      <Writter className="w-2/3 pr-3 h-full" text={text} setText={setText} />
      <Preview className="w-1/3" fullText={text} />
    </NavBarLayout>
  )
}

export async function getServerSideProps() {
  const user = null
  if (user) {
    return {
      props: {
        user: user
      }
    }
  } else {
    return {
      props: {}
    }
  }
}