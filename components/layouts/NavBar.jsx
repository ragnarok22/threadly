import { BaseLayout } from "./base"

export const NavBarLayout = ({ children }) => {
  return (
    <BaseLayout>
      <div className="max-w-7xl h-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          {children}
        </div>
      </div>
    </BaseLayout>
  )
}