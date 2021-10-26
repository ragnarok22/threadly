import { useState } from "react"
import { BaseLayout } from "../components/layouts/base"
import { NavBarLayout } from "../components/layouts/NavBar"
import { Preview } from "../components/Preview"
import { Writter } from "../components/Writter"

export default function Home() {
  const [text, setText] = useState()

  return (
    <NavBarLayout>
      <Writter className="w-2/3" text={text} setText={setText} />
      <Preview className="w-1/3" fullText={text} />
    </NavBarLayout>
  )
}