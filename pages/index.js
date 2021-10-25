import { BaseLayout } from "../components/layouts/base"
import { Preview } from "../components/Preview"
import { Writter } from "../components/Writter"

export default function Home() {
  return (
    <BaseLayout>
      <div className="max-w-7xl h-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          <Writter className="w-2/3" />
          <Preview className="w-1/3" />
        </div>
      </div>
    </BaseLayout>
  )
}