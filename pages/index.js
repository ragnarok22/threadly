import { useState } from "react"
import { BaseLayout } from "../components/layouts/base"
import { Preview } from "../components/Preview"
import { Writter } from "../components/Writter"

export default function Home() {
  const [text, setText] = useState()

  return (
    <BaseLayout>
      <div className="max-w-7xl h-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          <Writter className="w-2/3" text={text} setText={setText} />
          <Preview className="w-1/3" fullText={text} />
        </div>
      </div>
    </BaseLayout>
  )
}