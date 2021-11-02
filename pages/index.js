import { useState } from "react"
import { NavBarLayout } from "../components/layouts/NavBar"
import { Preview } from "../components/Preview"
import { Writter } from "../components/Writter"

export default function Home({ user }) {
  const [text, setText] = useState()

  return (
    <NavBarLayout>
      <Writter className="w-full lg:w-2/3 mx-3 md:mx-0 lg:pr-3 h-full" text={text} setText={setText} />
      <Preview className="w-full lg:w-1/3" fullText={text} setText={setText} />
    </NavBarLayout>
  )
}
